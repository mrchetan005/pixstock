

import Banner from "../../components/banner";
import Featured from "../../components/featured";
import Collection from "../../components/collection";
import { useEffect } from "react";
import { useActivePage } from "../../hooks";

const Home = () => {

    const [, setActivePage] = useActivePage();

    useEffect(() => {
        setActivePage('home');

        scrollTo(0, 0);
    }, [setActivePage]);

    return (
        <article>
            <Banner />
            <Featured type='photos' />
            <Featured type='videos' />
            <Collection />
        </article>
    );
}

export default Home;

