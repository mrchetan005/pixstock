
import { useEffect } from 'react';
import Media from '../../components/media';
import { useActivePage } from '../../hooks';

const Videos = () => {
    const [, setActivePage] = useActivePage();

    useEffect(() => {
        setActivePage('videos');
    }, [setActivePage]);

    return (
        <Media mediaType={'videos'} />
    )
}

export default Videos;