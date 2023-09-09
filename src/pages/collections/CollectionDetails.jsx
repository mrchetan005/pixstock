import { useLocation, useParams } from "react-router-dom";
import LoadMore from '../../components/loader/LoadMore';
import { useEffect, useRef, useState } from "react";
import { client } from "../../api";
import PhotoCard from "../../components/featured/PhotoCard";
import VideoCard from "../../components/featured/VideoCard";
import Layout from '../../components/layout';
import { useIntersectionObserver } from "../../hooks";
import Masonry from "@mui/lab/Masonry/Masonry";
import { useColumns } from '../../hooks';


const CollectionDetails = () => {
    const [isIntersecting] = useIntersectionObserver();
    const location = useLocation();
    const mediaType = location.pathname.split('/')[1];
    const totalPages = useRef(0);
    const params = useParams();
    const [media, setMedia] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const columns = useColumns()

    const [page, setPage] = useState(1);
    const perPage = 30;

    // ! find masonry grid column count
    const columnCount = useRef(2);
    useEffect(() => {
        columnCount.current = getComputedStyle(document.documentElement).getPropertyValue('--column-count');
        console.log('column count => ', columnCount);
    }, []);

    console.log(mediaType, perPage, totalPages.current, page);

    useEffect(() => {
        setLoading(true);
        client[mediaType].detail(params.id, { per_page: perPage, page: page }, data => {
            totalPages.current = Math.ceil(data.total_results / perPage);
            setLoading(false);
            const filterUniqueData = [...media, ...data.media].filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index);
            setMedia(filterUniqueData);
        })
    }, [params, page]);

    // ! load more
    const loadMore = () => {
        page < totalPages.current && setPage(prev => prev + 1);
    }

    useEffect(() => {
        isIntersecting && loadMore();
    }, [isIntersecting]);


    return (
        <Layout>
            <article className="containerr">
                <h2 className="page-title title-large">{pageTitle}</h2>
                <Masonry columns={columns} >
                    {
                        media.map((m) => (
                            m.type.toLowerCase() === 'photo'
                                ? <PhotoCard key={m.id} {...m} />
                                : <VideoCard key={m.id} {...m} />
                        ))
                    }
                </Masonry>
                {loading && <LoadMore />}
            </article>
        </Layout>
    )
}


export default CollectionDetails;