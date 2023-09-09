import { useEffect } from "react";
import Layout from "../../components/layout";
import Media from "../../components/media";
import { useActivePage } from "../../hooks";


const Photos = () => {
    const [, setActivePage] = useActivePage();

    useEffect(() => {
        setActivePage('photos');
    }, [setActivePage]);

    return (
        <Layout>
            <Media mediaType={'photos'} />
        </Layout>
    )
}

export default Photos;

