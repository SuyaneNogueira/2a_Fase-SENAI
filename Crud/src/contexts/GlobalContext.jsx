import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const[contatinho, SetContatinho] = useState('')
const[contatinhos, SetContatinhos] = useState([])
    return(
        <GlobalContext.Provider value={{usuarioLogado, contatinho, 
        SetContatinho,contatinhos,SetContatinhos}}>
            {children}
        </GlobalContext.Provider>
    )
}
