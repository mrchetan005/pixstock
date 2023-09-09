
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import styles from './banner.module.css';

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={`${styles.bannerCard} ${styles.primary}`}>
                <div className={styles.cardContent}>
                    <h3 className={`headline-medium ${styles.cardTitle}`}>
                        High quality stock for free!
                    </h3>
                    <p className={`body-large ${styles.cardText}`}>
                        Explore our exceptional collections of high-quality stock photos.
                    </p>
                    <Link to={'/photos'} >
                        <Button color='inherit' className='btn btn-primary'>
                            <span className='label-large text'>Explore Now</span>
                        </Button>
                    </Link>
                </div>
                <div className={styles.cardGrid}>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b1', backgroundImage: `url(/images/photo-banner-1.jpg)` }}>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b2', backgroundImage: `url(/images/photo-banner-2.jpg)` }}>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b3', backgroundImage: `url(/images/photo-banner-3.jpg)` }}>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b4', backgroundImage: `url(/images/photo-banner-4.jpg)` }}>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b5', backgroundImage: `url(/images/photo-banner-5.jpg)` }}>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b6', backgroundImage: `url(/images/photo-banner-6.jpg)` }}>
                    </div>
                </div>
            </div>
            <div className={`${styles.bannerCard} ${styles.secondary}`}>
                <div className={styles.cardContent}>
                    <h3 className={`headline-medium ${styles.cardTitle}`}>
                        Top rated stock Videos for free!
                    </h3>
                    <p className={`body-large ${styles.cardText}`}>
                        Our curated selection videos is sure to inspire and captivate.
                    </p>
                    <Link to={'/videos'} >
                        <Button color='inherit' className='btn btn-secondary'>
                            <span className='label-large text'>Explore Now</span>
                        </Button>
                    </Link>
                </div>
                <div className={styles.cardGrid}>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b1' }} >
                        <video className={styles.video} width={360} height={420} loading='lazy' autoPlay muted loop>
                            <source src='/videos/video-banner-1.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b2' }} >
                        <video className={styles.video} width={360} height={640} loading='lazy' autoPlay muted loop>
                            <source src='/videos/video-banner-2.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b3' }} >
                        <video className={styles.video} width={480} height={360} loading='lazy' autoPlay muted loop>
                            <source src='/videos/video-banner-3.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b4' }} >
                        <video className={styles.video} width={360} height={640} loading='lazy' autoPlay muted loop>
                            <source src='/videos/video-banner-4.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b5' }} >
                        <video className={styles.video} width={640} height={360} loading='lazy' autoPlay muted loop>
                            <source src='/videos/video-banner-5.mp4' type='video/mp4' />
                        </video>
                    </div>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b6' }} >
                        <video className={styles.video} width={480} height={360} loading='lazy' autoPlay muted loop>
                            <source src='/videos/video-banner-6.mp4' type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
            <div className={`${styles.bannerCard} ${styles.tertiary}`}>
                <div className={styles.cardContent}>
                    <h3 className={`headline-medium ${styles.cardTitle}`}>
                        Best collections with best medias!
                    </h3>
                    <p className={`body-large ${styles.cardText}`}>
                        Discover a treasure trove of stunning images, captivating videos.
                    </p>
                    <Link to={'/collections'} >
                        <Button color='inherit' className='btn btn-tertiary'>
                            <span className='label-large text'>Explore Now</span>
                        </Button>
                    </Link>
                </div>
                <div className={styles.cardGrid}>
                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b1', backgroundImage: `url(/images/collection-banner-1.jpg)` }}>
                    </div>

                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b2' }} >
                        <video className={styles.video} width={360} height={420} loading='lazy' autoPlay muted loop>
                            <source src='/videos/collection-banner-2.mp4' type='video/mp4' />
                        </video>
                    </div>

                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b3', backgroundImage: `url(/images/collection-banner-3.jpg)` }}>
                    </div>

                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b4', backgroundImage: `url(/images/collection-banner-4.jpg)` }}>
                    </div>

                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b5' }} >
                        <video className={styles.video} width={640} height={360} loading='lazy' autoPlay muted loop>
                            <source src='/videos/collection-banner-5.mp4' type='video/mp4' />
                        </video>
                    </div>

                    <div className={`${styles.cardBanner}`} style={{ gridArea: 'b6' }} >
                        <video className={styles.video} width={640} height={338} loading='lazy' autoPlay muted loop>
                            <source src='/videos/collection-banner-6.mp4' type='video/mp4' />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;