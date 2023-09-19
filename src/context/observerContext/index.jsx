/* eslint-disable react/prop-types */
import { useState } from "react";

import { observerContext } from "..";

const ObserverContextProvider = ({ children }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    return (
        <observerContext.Provider value={[isIntersecting, setIsIntersecting]}>
            {children}
        </observerContext.Provider>
    )
}

export default ObserverContextProvider;
