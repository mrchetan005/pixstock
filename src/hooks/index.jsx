import { useContext } from "react";
import { activePageContext, themeContext, resizeContext, observerContext, downloadListContext } from "../context";


export function useTheme() {
    return useContext(themeContext);
}

export const useColumns = () => {
    return useContext(resizeContext);
}

export const useIntersectionObserver = () => {
    return useContext(observerContext);
}

export const useActivePage = () => {
    return useContext(activePageContext);
}

export const useDownloadList = () => {
    return useContext(downloadListContext);
}
