import { useEffect } from "react";
import Collection from "../../components/collection";
import { useActivePage } from "../../hooks";


const Collections = () => {
    const [, setActivePage] = useActivePage();

    useEffect(() => {
        setActivePage('collections');
    }, [setActivePage]);

    return (
        <Collection />
    )
}

export default Collections;