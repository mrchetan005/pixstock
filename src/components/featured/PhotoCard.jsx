
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import styles from './featured.module.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
import { favoriteObj, addToFavorite } from '../../api';

const PhotoCard = ({ alt, avg_color, width, height, id, src }) => {
    const [active, setActive] = useState(favoriteObj['photos'][id]);
    let large;
    if (src) ({ large } = src);

    const favoriteHandler = () => {
        setActive(addToFavorite('photos', id))
    }

    return (
        <div className={`${styles.card} grid-item`}>
            <Link to={`/photos/detail/${id}`}>
                <figure className="card-banner" style={{ "---width": width, "--height": height, backgroundColor: avg_color }}>
                    <img onLoad={(e) => e.target.style.opacity = 1} src={large} alt={alt} width={width} height={height} loading='lazy' className="img-cover" />
                </figure>
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
        </div>
    )
}

export default PhotoCard;
