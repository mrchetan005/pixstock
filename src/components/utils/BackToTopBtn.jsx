import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import { useEffect, useState } from 'react';

const BackToTopBtn = () => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const toggleVisibility = () => {
            const { scrollTop, clientHeight } = document.documentElement;
            if (scrollTop >= clientHeight) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        }
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, []);

    return (
        <div title='Back to Top' onClick={handleClick} className={`fixed bottom-10 right-10  z-50 border-[1px] border-[var(--primary)] bg-[var(--primary)] opacity-50 transition-all duration-300 hover:opacity-100  hover:bg-[var(--primary)] rounded-full ${visible ? '' : 'hidden'}`}>
            <IconButton color='inherit' sx={{ color: 'var(--on-primary)' }} size='large'>
                <KeyboardArrowUpIcon />
            </IconButton>
        </div>
    )
}

export default BackToTopBtn;