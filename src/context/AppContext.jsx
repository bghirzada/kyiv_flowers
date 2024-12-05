import { createContext, useState } from "react";

export const AppContext = createContext()


const AppProvider = ({ children }) => {

    const [isAdmin, setIsAdmin] = useState(false)

    return (
        <AppContext.Provider value={{ isAdmin, setIsAdmin }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider