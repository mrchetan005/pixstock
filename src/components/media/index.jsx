
import { useEffect, useRef, useState } from "react";
import { client } from '../../api';
import PhotoCard from "../../components/featured/PhotoCard";
import FilterBar from "../../components/filterbar";
import { useLocation, useSearchParams } from "react-router-dom";
import { IconButton, TextField } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import VideoCard from "../featured/VideoCard";
import Masonry from '@mui/lab/Masonry';
import { useIntersectionObserver } from '../../hooks';
import { useColumns } from "../../hooks";
import LoadMore from "../loader/LoadMore";

const Media = () => {
    const [isIntersecting] = useIntersectionObserver();
    const location = useLocation();
    const mediaType = location.pathname.slice(1);
    const totalPages = useRef(0);
    const colorRef = useRef(null);
    const [filterObj, setFilterObj] = useState({})
    const [searchObj, setSearchObj] = useState({});
    const [media, setMedia] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [pageTitle, setPageTitle] = useState('');
    const [params, setParams] = useSearchParams();
    const columns = useColumns();
    let perPage = 30;

    useEffect(() => {
        // ! from params, find query if searched anything
        for (const [key, value] of params.entries()) {
            searchObj[key] = value;
        }
        setSearchObj({ ...searchObj });
        setParams({ ...searchObj, ...filterObj });
        if (searchObj.query) {
            setPageTitle(() => `${searchObj.query} ${mediaType}`)
        } else {
            setPageTitle(`${mediaType == 'photos' ? 'Curated' : 'Popular'} ${mediaType}`)
        }
        setLoading(true);

        // ! fetch data 
        client?.[mediaType]?.[searchObj.query || Object.keys(filterObj).length ? 'search' : `${mediaType === 'photos' ? 'curated' : 'popular'}`]({ ...searchObj, ...filterObj, per_page: perPage, page: page }, (data) => {
            totalPages.current = Math.ceil(data.total_results / perPage);
            setLoading(false);
            const filterUniqueData = [...media, ...data[mediaType]].filter((item, index, self) => self.findIndex((i) => i.id === item.id) === index);
            setMedia(filterUniqueData);
        });

    }, [filterObj, page, params]);

    // ! filter functionality
    const addFilter = (e) => {
        setPage(1);
        setMedia([]);
        const { name, value } = e.target;
        setFilterObj((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const removeFilter = (filter) => {
        delete filterObj[filter];
        delete searchObj[filter];
        setPage(1);
        setMedia([]);
        setSearchObj({ ...searchObj });
        setFilterObj({ ...filterObj });
        setParams({ ...searchObj, ...filterObj });
    }

    const orientationFilterProps = {
        label: 'orientation',
        setValue: addFilter,
        value: filterObj.orientation || '',
        filterItems: ['portrait', 'landscape', 'square']
    }
    const sizeFilterProps = {
        label: 'size',
        setValue: addFilter,
        value: filterObj.size || '',
        filterItems: ['small', 'medium', 'large']
    }

    // ! load more 
    const loadMore = () => {
        page < totalPages.current && setPage(prev => prev + 1);
    }

    useEffect(() => {
        isIntersecting && loadMore();
    }, [isIntersecting])


    return (
        <article className="containerr">
            <h2 className="page-title title-large">{pageTitle}</h2>
            {
                searchObj.query &&
                <div className="filter-bar">
                    <div className="flex items-center border-[1px]">
                        <FilterBar {...orientationFilterProps} />
                        {
                            filterObj.orientation &&
                            <IconButton className="icon-btn" onClick={() => removeFilter('orientation')}>
                                <CloseOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--on-surface)' }} />
                            </IconButton>
                        }
                    </div>
                    <div className="flex items-center border-[1px]">
                        <FilterBar {...sizeFilterProps} />
                        {
                            filterObj.size &&
                            <IconButton onClick={() => removeFilter('size')}>
                                <CloseOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--on-surface)' }} />
                            </IconButton>
                        }
                    </div>

                    <div className={`flex items-center border-[1px] p-4 ${filterObj.color ? 'pr-0' : ''}`}>
                        <TextField
                            label="color"
                            name="color"
                            type="color"
                            inputRef={colorRef}
                            sx={{ height: '40px', width: 120, backgroundColor: colorRef.current?.value }}
                            variant="outlined"
                            onBlur={addFilter}
                        />
                        {
                            filterObj.color &&
                            <IconButton onClick={() => {
                                colorRef.current.value = '';
                                removeFilter('color');
                            }}>
                                <CloseOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--on-surface)' }} />
                            </IconButton>
                        }
                    </div>
                </div>
            }
            <Masonry columns={columns}>
                {
                    mediaType === 'photos'
                        ? media.map((photo) => (
                            <PhotoCard loading={loading} key={photo.id} {...photo} />
                        ))
                        : media.map((video) => (
                            <VideoCard loading={loading} key={video.id} {...video} />
                        ))
                }
            </Masonry>
            {/* </div> */}
            {loading && <LoadMore />}
        </article>
    )
}

export default Media;

