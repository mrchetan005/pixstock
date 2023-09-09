
import { useEffect } from 'react';
import Layout from '../../components/layout';
import Media from '../../components/media';
import { useActivePage } from '../../hooks';

const Videos = () => {
    const [, setActivePage] = useActivePage();

    useEffect(() => {
        setActivePage('videos');
    }, [setActivePage]);

    return (
        <Layout>
            <Media mediaType={'videos'} />
        </Layout>
    )
}

export default Videos;