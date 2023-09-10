import { useEffect, useState } from "react";
import BtnGroup from "../../components/header/BtnGroup";
import Layout from "../../components/layout";
import PhotoCard from "../../components/featured/PhotoCard";
import VideoCard from "../../components/featured/VideoCard";
import { useActivePage } from "../../hooks";
import Masonry from "@mui/lab/Masonry/Masonry";
import { useColumns } from '../../hooks';
import { favoriteObj } from "../../api";



const Favorite = () => {
    const [media, setMedia] = useState([]);
    const [selected, setSelected] = useState('photos');
    const [, setActivePage] = useActivePage();
    const columns = useColumns();

    useEffect(() => {
        setActivePage('favorite');
    }, [setActivePage]);

    useEffect(() => {
        const favData = favoriteObj;
        setMedia(Object.entries(favData?.[selected]));
    }, [selected]);

    return (
        <Layout>
            <article className="containerr favorite">
                <h2 className="page-title title-large">Favorites</h2>
                <BtnGroup selected={selected} setSelected={setSelected} />

                <Masonry columns={columns}>
                    {
                        media.length >= 1 &&
                        media.map((m) => (
                            selected === 'photos'
                                ? <PhotoCard key={m[0]} {...m[1]} />
                                : <VideoCard key={m[0]} {...m[1]} />
                        ))
                    }
                </Masonry>
            </article>
        </Layout>
    )
}

export default Favorite;