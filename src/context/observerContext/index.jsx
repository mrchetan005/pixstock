/* eslint-disable react/prop-types */
import { useContext, useState } from "react";

import { observerContext } from "..";

const ObserverContextProvider = ({ children }) => {
    const [isIntersecting, setIsIntersecting] = useState('home');

    return (
        <observerContext.Provider value={[isIntersecting, setIsIntersecting]}>
            {children}
        </observerContext.Provider>
    )
}

export default ObserverContextProvider;
