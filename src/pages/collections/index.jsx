import { useEffect } from "react";
import Collection from "../../components/collection";
import Layout from "../../components/layout";
import { useActivePage } from "../../hooks";


const Collections = () => {
    const [, setActivePage] = useActivePage();

    useEffect(() => {
        setActivePage('collections');
    }, [setActivePage]);

    return (
        <Layout>
            <Collection />
        </Layout>
    )
}

export default Collections;