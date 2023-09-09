/* eslint-disable react/prop-types */
import { useState } from "react";
import { activePageContext } from "..";

const ActivePageProvider = ({ children }) => {
    const [activePage, setActivePage] = useState('home');

    return (
        <activePageContext.Provider value={[activePage, setActivePage]}>
            {children}
        </activePageContext.Provider>
    )
}

export default ActivePageProvider;
