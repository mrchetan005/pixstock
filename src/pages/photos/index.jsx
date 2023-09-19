import { useEffect } from "react";
import Media from "../../components/media";
import { useActivePage } from "../../hooks";


const Photos = () => {
    const [, setActivePage] = useActivePage();

    useEffect(() => {
        setActivePage('photos');
    }, [setActivePage]);

    return (
        <Media mediaType={'photos'} />
    )
}

export default Photos;

