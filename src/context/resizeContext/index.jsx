/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { resizeContext } from "..";

const countColumns = () => window.innerWidth <= 900 ? 2 : 3;

const ResizeContextProvider = ({ children }) => {
    const [columns, setColumns] = useState(countColumns());

    useEffect(() => {
        const resizeHandler = () => {
            setColumns(countColumns());
        }

        window.addEventListener('resize', resizeHandler);
        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    }, [])

    return (
        <resizeContext.Provider value={columns}>
            {children}
        </resizeContext.Provider>
    )
}

export default ResizeContextProvider;
