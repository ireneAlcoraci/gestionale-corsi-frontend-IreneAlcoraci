import { ModificationForm } from "../../components/modificationForm/ModificationForm";
import { useEffect } from "react";

export function UserModification(){

    useEffect(()=>{
        document.title = "Modification"
    },[]);

    return(
        <div>
            <h1 className="text-center mt-5">Modifica Utente</h1>
            <ModificationForm/>
        </div>
    )
}