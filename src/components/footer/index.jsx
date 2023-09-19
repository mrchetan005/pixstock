
import { Link } from 'react-router-dom';
import styles from './footer.module.css';
import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks';


const Footer = () => {
    const [, setIsIntersecting] = useIntersectionObserver();
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, {
            rootMargin: '0px',
        });

        ref.current && observer.observe(ref.current);

        // ! cleanup of the observer before re-render
        return () => {
            observer.disconnect();
        }
    }, [ref, setIsIntersecting]);

    return (
        <footer ref={ref} className={styles.footer}>
            <div className="containerr">
                <div className={`${styles.footerCard}`}>
                    <div className="col">
                        <Link to='/' className='logo'>Pixstock</Link>
                        <p className={`${styles.text} body-small`}>
                            Pixstock is a stock photo app developed by <span className="color-primary">Chetan</span> and all Photos and Videos provided by <a href="https://pexels.com" target='_blank' rel='noreferrer' className="color-primary">Pexels</a>.
                        </p>
                    </div>
                    <div className="col">
                        <p className={`${styles.title} label-medium`}>Follow us on</p>
                        <div className="social-list">
                            <a href="https://www.linkedin.com/in/chetan005/" target='_blank' rel='noreferrer' className="color-primary"> LinkedIn </a> <a href="https://github.com/mrchetan005" target='_blank' rel='noreferrer' className="color-primary"> GitHub </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;