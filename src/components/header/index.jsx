import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styles from './header.module.css';
import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks';
import { IconButton } from '@mui/material';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import NavBar from '../navigation';
import Search from './Search';
import { addToFavorite, favoriteObj } from '../../api';
import { useDownloadList } from '../../hooks';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Header = () => {
    const params = useParams();
    const location = useLocation();
    const mediaType = location?.pathname?.split('/')[1];
    const [topBarActive, setTopBarActive] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showSearchView, setShowSearchView] = useState(false);
    const [active, setActive] = useState(favoriteObj?.[mediaType]?.[params.id]);
    const [expand, setExpand] = useState(false);
    const { toggleTheme } = useTheme();
    const navigate = useNavigate();
    const [list] = useDownloadList();

    const favoriteHandler = () => {
        setActive(addToFavorite(mediaType, params.id));
    }

    const toggleSearchView = () => setShowSearchView(!showSearchView);

    const togggleHeaderActive = () => {
        setTopBarActive(window.scrollY > 50);
    }

    useEffect(() => {
        window.addEventListener('scroll', togggleHeaderActive)
        return () => {
            window.removeEventListener('scroll', togggleHeaderActive);
        }
    }, []);


    useEffect(() => {
        setActive(favoriteObj?.[mediaType]?.[params.id]);
    }, [params, mediaType])

    const toggleShowMenu = () => { setShowMenu(!showMenu); }

    const toggleExpand = () => { setExpand(!expand); }

    const goBack = () => { navigate(-1); }

    return (
        <header className={`header ${styles.topAppBar} ${topBarActive ? styles.active : ''}`}>

            {
                params.id && mediaType !== 'collections'
                    ? <IconButton sx={{ padding: '1.5rem' }} onClick={goBack} className="icon-btn search-open arrow-back-icon">
                        <ArrowBackIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                    </IconButton>
                    : <IconButton onClick={toggleShowMenu} sx={{ padding: '1.5rem' }} className="icon-btn menu-icon">
                        <MenuIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                    </IconButton>
            }
            <Link to={'/'} className='logo main-logo'>Pixstock</Link>

            <Search showSearchView={showSearchView} toggleSearchView={toggleSearchView} />

            {
                params.id && mediaType !== 'collections'
                    ? <>
                        <div className='split-btn'>
                            <a href={list?.[0]?.[1]} download={'image.jpg'} className='label' >
                                <span>Download</span>
                                <FileDownloadOutlinedIcon sx={{ fontSize: '2.5rem', color: 'var(--background)' }} />
                            </a>
                            <IconButton onClick={toggleExpand} sx={{ padding: '0.6rem' }} className="arrow-icon">
                                <ArrowDropDownOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--background)' }} />
                            </IconButton>
                        </div>
                        {expand &&
                            <div className="download-menu">
                                <div className="menu-wrapper">
                                    {
                                        mediaType === 'photos'
                                            ? list.map((item) => (
                                                <a href={item[1]} target='_blank' rel='noreferrer'
                                                    onClick={toggleExpand} download className='menu-item' key={item[0]}>
                                                    <span className="label-large text">
                                                        {item[0]}
                                                    </span>
                                                </a>
                                            ))
                                            : list.map((item) => (
                                                <a href={item.link} target='_blank' rel='noreferrer'
                                                    onClick={toggleExpand} download className='menu-item' key={item.id}>
                                                    <span className="label-large text">
                                                        {item?.quality?.toUpperCase()}
                                                    </span>
                                                    <span className="label-large text">
                                                        {item.height} x {item.width}
                                                    </span>
                                                </a>
                                            ))
                                    }
                                </div>
                            </div>
                        }

                        <IconButton onClick={favoriteHandler} sx={{ padding: '1.5rem' }} >
                            {
                                active ?
                                    <FavoriteOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--primary)' }} />
                                    : <FavoriteBorderIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                            }
                        </IconButton>

                    </>
                    : <IconButton sx={{ padding: '1.5rem' }} onClick={toggleSearchView} className={`${styles.searchIconRight} icon-btn search-open`}>
                        <SearchIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                    </IconButton>
            }

            <IconButton sx={{ padding: '1.5rem' }} className="icon-btn theme-btn" onClick={toggleTheme}>
                <DarkModeIcon className='dark-icon' sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                <LightModeIcon className='light-icon' sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
            </IconButton>

            <NavBar showMenu={showMenu} toggleShowMenu={toggleShowMenu} />
        </header>
    )
}

export default Header;