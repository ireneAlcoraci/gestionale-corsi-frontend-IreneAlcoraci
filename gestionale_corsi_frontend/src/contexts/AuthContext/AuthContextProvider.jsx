import { AuthContext } from "./AuthContext";
import { useState } from "react";

export function AuthContextProvider({children}){

    const[user,setUser] = useState({
        firstName: "irene",
        lastName: "alcoraci",
        email: "irene@mail.com",
        isAuthorized: true
    });

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    );


}