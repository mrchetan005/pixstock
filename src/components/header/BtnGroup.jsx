
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Button } from '@mui/material';
import styles from './header.module.css'

const BtnGroup = ({ selected, setSelected }) => {
    return (
        <div className={`${styles.btnGroup} btn-group`}>
            <Button onClick={() => setSelected('photos')} color='inherit' className={`${styles.btnSegment} ${selected === 'photos' ? styles.selected : ''}`}>
                <ImageIcon sx={{ fontSize: '1.8rem', color: 'var(--on-background)' }} />
                <span className="label-large text"> Photos </span>
            </Button>
            <Button onClick={() => setSelected('videos')} color='inherit' className={`${styles.btnSegment} ${selected === 'videos' ? styles.selected : ''}`} data-ripple data-segment-btn data-segment-values="videos">
                <VideocamIcon sx={{ fontSize: '1.8rem', color: 'var(--on-background)' }} />
                <span className="label-large text"> Videos </span>
            </Button>
        </div>
    )
}

export default BtnGroup;