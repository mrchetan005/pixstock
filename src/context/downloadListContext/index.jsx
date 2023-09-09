import { useContext, useState } from "react";
import { downloadListContext } from "..";

const DownloadListProvider = ({ children }) => {
    const [list, setList] = useState([]);
    return (
        <downloadListContext.Provider value={[list, setList]}>
            {children}
        </downloadListContext.Provider>
    )
}

export default DownloadListProvider;
