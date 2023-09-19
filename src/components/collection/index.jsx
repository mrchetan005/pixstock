import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { client } from '../../api';
import CollectionCard from './CollectionCard';
import LoadMore from '../loader/LoadMore';
import { useIntersectionObserver } from '../../hooks';

const Collection = () => {
    const [isIntersecting] = useIntersectionObserver();
    const location = useLocation();
    const mediaType = location.pathname.split('/')[1];
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const totalPages = useRef(0);
    const perPage = mediaType === 'collections' ? 30 : 18;

    // ! fetch data
    useEffect(() => {
        client.collections.featured({ per_page: perPage, page: page }, (data) => {
            totalPages.current = Math.ceil(data.total_results / perPage);
            setLoading(false);
            setCollections([...collections, ...data.collections]);
        })
    }, [page]);


    // ! load more
    const loadMore = () => {
        page < totalPages.current && setPage(prev => prev + 1);
    }

    useEffect(() => {
        isIntersecting && mediaType === 'collections' && loadMore();
    }, [isIntersecting]);

    return (
        <section className='collection section'>
            <div className="containerr">
                <h2 className="title-large section-title" id='collection-label'>Featured collections</h2>
                <div className="collection-grid">
                    {
                        collections?.map((collection) => (
                            <CollectionCard key={collection.id} {...collection} />
                        ))
                    }
                </div>
                {
                    mediaType !== 'collections'
                        ? <div className="overlay-btn">
                            <Button color='inherit' className='btn btn-primary'>
                                <Link to={'/collections'} >
                                    <span className='label-large text'>More Collections</span>
                                </Link>
                            </Button>
                        </div>
                        : loading && <LoadMore />
                }
            </div>
        </section>
    )
}

export default Collection;