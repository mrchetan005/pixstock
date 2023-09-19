/* eslint-disable react/prop-types */

import { useState } from 'react';
import { IconButton } from '@mui/material';
import styles from './featured.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
import { favoriteObj, addToFavorite } from '../../api';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';


let playTimeout;
const VideoCard = ({ image, alt, avg_color, width, height, id, video_files }) => {
    const [active, setActive] = useState(favoriteObj['videos'][id]);
    const [isPlaying, setIsPlaying] = useState(false);


    let link, file_type;
    if (video_files)
        ({ link, file_type } = video_files.find((file) => (file.quality === 'sd' && file.width < 1000)));

    const favoriteHandler = () => {
        setActive(addToFavorite('videos', id))
    }

    const handlePointerOver = (e) => {
        playTimeout = setTimeout(() => {
            e.target.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {
                setIsPlaying(false);
            })
        }, 500)
    }

    const handlePointerOut = (e) => {
        playTimeout && clearTimeout(playTimeout);
        isPlaying && e.target.pause();
        setIsPlaying(false);
    }


    return (
        <div className={`${styles.card} grid-item`}>
            <Link to={`/videos/detail/${id}`} className='card-banner'>
                <video onPointerOver={handlePointerOver} onPointerOut={handlePointerOut} poster={image} preload='none' muted loop className="img-cover" loading='lazy' style={{ "---width": width, "--height": height, backgroundColor: avg_color }} alt={alt} width={width} height={height}>
                    <source src={link} type={file_type} />
                </video>
            </Link>
            <div className={`${styles.cardContent}`}>
                <IconButton onClick={favoriteHandler} className='icon-btn' color='inherit'>
                    {
                        active
                            ? <FavoriteOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--light-inverse-primary)' }} />
                            : <FavoriteBorderIcon sx={{ fontSize: '2rem' }} />
                    }
                </IconButton>
            </div>
            {
                !isPlaying &&
                <span className={`${styles.cardBadge}`}>
                    <PlayArrowOutlinedIcon sx={{ fontSize: '2rem', color: 'var(--light-inverse-secondary)' }} />
                </span>
            }
        </div>
    )
}

export default VideoCard;
