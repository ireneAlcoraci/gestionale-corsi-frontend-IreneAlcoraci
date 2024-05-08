import { AuthContext } from "./AuthContext";
import { useState } from "react";
import Cookies from "js-cookie";

export function AuthContextProvider({children}){

    const[user,setUser] = useState({
        nome: Cookies.get("nome"),
        cognome: Cookies.get("cognome"),
        email: Cookies.get("email"),
        ruolo: Cookies.get("ruolo")
    });

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );


}