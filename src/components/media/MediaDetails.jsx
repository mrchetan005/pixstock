import { useLocation, useParams } from "react-router-dom";
import LoadMore from '../../components/loader/LoadMore';
import { useEffect, useRef, useState } from "react";
import { client } from "../../api";
import { useDownloadList } from "../../hooks";
import PhotoCard from "../../components/featured/PhotoCard";
import VideoCard from "../featured/VideoCard";
import { useIntersectionObserver } from "../../hooks";
import Masonry from '@mui/lab/Masonry';
import { useColumns } from '../../hooks';



const MediaDetails = () => {
    const location = useLocation();
    const mediaType = location.pathname.split('/')[1];
    const totalPages = useRef(0);
    const params = useParams();
    const [media, setMedia] = useState([]);
    const [mediaSimilar, setMediaSimilar] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loadingSimilar, setLoadingSimilar] = useState(false);
    const [, setList] = useDownloadList();
    const [isIntersecting] = useIntersectionObserver();
    const columns = useColumns();

    const [page, setPage] = useState(1);
    const perPage = 30;

    // ! fetch data
    useEffect(() => {
        setLoading(true);
        client[mediaType].detail(params.id, data => {
            setMedia(data);
            if (mediaType === 'photos') {
                setList(Object.entries(data.src))
            } else {
                setList(data.video_files);
            }
            setLoading(false);
            setPage(1);
        })
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });
    }, [params]);


    // ! fetch similar data
    useEffect(() => {
        if (!media.alt) return;
        setLoadingSimilar(true);

        client?.[mediaType]?.search({ query: media.alt, page: page, per_page: perPage }, data => {
            totalPages.current = Math.ceil(data.total_results / perPage);
            setLoadingSimilar(false);
            // if (page === 1) {
            //     setMediaSimilar(data[mediaType]);
            // } else {
            const filterUniqueData = [...mediaSimilar, ...data[mediaType]].filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index);
            setMediaSimilar(filterUniqueData);
            // }
        })
    }, [media, page]);


    // ! load more
    const loadMore = () => {
        page < totalPages.current && setPage(prev => prev + 1);
    }

    useEffect(() => {
        isIntersecting && loadMore();
    }, [isIntersecting]);

    // ! data variables 
    let alt, avg_color, height, width, photographer, src, image, user, author, video_files, link, file_type;
    if (mediaType === 'photos') {
        ({ alt, avg_color, height, width, photographer, src } = media)

    } else {
        ({ height, width, image, user, video_files } = media);
        author = user?.name;
        if (video_files)
            ({ link, file_type } = video_files.find((file) => (file.quality === 'hd')))
    }

    return (
        <article className="containerr ">
            <div className="detail-wrapper">
                {
                    loading ? <LoadMore />
                        : <>
                            <figure className="detail-banner img-holder" style={{ aspectRatio: `${width} / ${height}`, backgroundColor: avg_color }}>
                                {
                                    mediaType === 'photos'
                                        ? <img src={src?.large2x} alt={alt} className="img-cover" height={height} width={width} />
                                        : <>
                                            <video controls poster={image} className="img-cover">
                                                <source src={link} type={file_type} />
                                            </video>
                                        </>
                                }
                            </figure>
                            <p className="title-small text-center">{mediaType === 'photos' ? 'Photography' : 'Video'} by <span className="color-primary inline-block">{mediaType === 'photos' ? photographer : author}</span></p>
                        </>
                }
            </div>

            {mediaType === 'photos' && mediaSimilar.length >= 1 &&
                <>
                    <h2 className="title-large mt-8 mb-4">More like this</h2>

                    <Masonry columns={columns} >
                        {
                            mediaType === 'photos'
                                ? mediaSimilar.map((photo) => (
                                    <PhotoCard key={photo.id} {...photo} />
                                ))
                                : mediaSimilar.map((video) => (
                                    <VideoCard key={video.id} {...video} />
                                ))
                        }
                    </Masonry>

                    {loadingSimilar && <LoadMore />}
                </>
            }
        </article>
    )
}

export default MediaDetails;

