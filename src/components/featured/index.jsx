
import { Button, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { client } from '../../api';
import PhotoCard from './PhotoCard';
import VideoCard from './VideoCard';
import { useColumns } from '../../hooks';
import Masonry from '@mui/lab/Masonry/Masonry';

const Featured = ({ type }) => {
    const [loading, setLoading] = useState(true);
    const [photos, setPhotos] = useState([]);
    const [videos, setVideos] = useState([]);
    const gridContainer = useRef(null);
    const columns = useColumns();
    const perPage = 20;

    useEffect(() => {
        setLoading(true);
        type === 'photos'
            ? client.photos.curated({ page: 1, per_page: perPage }, (data) => {
                const filterUniqueData = [...data.photos, ...photos].filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index);
                setPhotos(filterUniqueData);
                setLoading(false);
            })
            : client.videos.popular({ page: 1, per_page: perPage }, (data) => {
                const filterUniqueData = [...data.videos, ...videos].filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index);
                setVideos(filterUniqueData);
                setLoading(false);
            })
    }, [type]);

    return (
        <section className={`featured section`}>
            <div className="containerr">
                <h2 className='section-title title-large' id='featured-label'>Featured Photos</h2>
                <Masonry columns={columns} >
                    {
                        type === 'photos'
                            ? photos.map((photo, i) => (
                                loading
                                    ? <div key={Math.random() * (i + 1)} className='skeleton'></div>
                                    : <PhotoCard type={type} key={photo.id} {...photo} />
                            ))
                            : videos.map((video, i) => (
                                loading
                                    ? <Skeleton key={video.id} />
                                    : <VideoCard type={type} key={video.id} {...video} />
                            ))
                    }
                </Masonry>
                <div className="overlay-btn">
                    <Link to={'/photos'} >
                        <Button color='inherit' className='btn btn-primary'>
                            <span className='label-large text'>Explore Now</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Featured;

