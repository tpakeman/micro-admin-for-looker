import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(false)
    
    const contextValue = {
        loggedIn,
        setLoggedIn
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}