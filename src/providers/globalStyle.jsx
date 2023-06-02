import React, { useState } from "react";

export const GlobalStyleContext = React.createContext({})

export const GlobalStyleProvider = (props) => {
    const [lightMode,setLightMode] = useState(true)
    const [language, setLanguage] = useState("pt-Br")
    
    return (
        <GlobalStyleContext.Provider value={{lightMode, setLightMode, language, setLanguage}}>
            {props.children}
        </GlobalStyleContext.Provider>
    )
}