/* eslint-disable react/prop-types */
import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import styles from './navigation.module.css';
import { useActivePage } from "../../hooks";

const NavBar = ({ showMenu, toggleShowMenu }) => {
    const [activePage] = useActivePage();

    return (
        <>
            <nav className={`${styles.navigation} ${showMenu ? styles.show : ''}`}>
                <div className={styles.navigationHeader}>
                    <IconButton sx={{ padding: '1.5rem' }} className={`icon-btn ${styles.iconBtn}`} onClick={toggleShowMenu}>
                        <ArrowBackIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                    </IconButton>
                    <Link to={'/'} className='logo'>Pixstock</Link>
                </div>

                <ul className={`${styles.drawerList}`}>
                    <li>
                        <Link to='/'>
                            <Button onClick={toggleShowMenu} color="inherit" className={`${styles.drawerLink} ${activePage === 'home' ? styles.active : ''}`}>
                                {
                                    activePage === 'home'
                                        ? <HomeIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                        : <HomeOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                }
                                <span className="label-large">Home</span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link to='/photos'>
                            <Button color="inherit" className={`${styles.drawerLink} ${activePage === 'photos' ? styles.active : ''}`} onClick={toggleShowMenu}>
                                {
                                    activePage === 'photos'
                                        ? <ImageIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                        : <ImageOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                }
                                <span className="label-large">Photos</span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link to='/videos'>
                            <Button color="inherit" className={`${styles.drawerLink} ${activePage === 'videos' ? styles.active : ''}`} onClick={toggleShowMenu}>
                                {
                                    activePage === 'videos'
                                        ? <VideocamIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                        : <VideocamOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                }
                                <span className="label-large">Videos</span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link to='/collections'>
                            <Button color="inherit" className={`${styles.drawerLink} ${activePage === 'collections' ? styles.active : ''}`} onClick={toggleShowMenu}>
                                {
                                    activePage === 'collections'
                                        ? <AutoAwesomeMosaicIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                        : <AutoAwesomeMosaicOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                }
                                <span className="label-large">Collections</span>
                            </Button>
                        </Link>
                    </li>

                    <li>
                        <Link to='/favorite'>
                            <Button color="inherit" className={`${styles.drawerLink} ${activePage === 'favorite' ? styles.active : ''}`} onClick={toggleShowMenu}>
                                {
                                    activePage === 'favorite'
                                        ? <FavoriteOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                        : <FavoriteBorderIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                }
                                <span className="label-large">Favorite</span>
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div onClick={toggleShowMenu} className={`${styles.scrim} ${showMenu ? styles.active : ''}`}></div>
        </>
    )
}

export default NavBar;