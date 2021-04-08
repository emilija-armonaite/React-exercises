import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [likesCount, setLikes] = useState(0);

    const getLikes = () => {
        setLikes(likesCount + 1);
    }

    return (
        <AppContext.Provider
            value={{ likesCount, getLikes }} >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }