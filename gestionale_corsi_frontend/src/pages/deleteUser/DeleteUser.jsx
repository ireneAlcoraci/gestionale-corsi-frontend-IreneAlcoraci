import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { findUserByEmail } from "../../service/RESTService";
import { deleteUser } from "../../service/RESTService";
import { useNavigate } from "react-router-dom";



export function DeleteUser(){
    const navigateTo = useNavigate();
    const {email} = useParams();

    useEffect(() => {
        document.title = "Delete User";
        handleChange();
        console.log(deleteUserData.ruoli)
    }, []);

    const [deleteUserData, setDeleteUserData] = useState({});
    const [successDelete, setSuccessDelete] = useState(false);

    const handleChange = async () => {
        const deleteUserData = await findUserByEmail(email);
        setDeleteUserData(deleteUserData);
        console.log(deleteUserData);
    }

    const handleClickElimina = async () =>{
        const response = await deleteUser(email);
        console.log(response);
        if(response.ok){
            setSuccessDelete(true);
        }
    }

    const handleClick = () =>{
        navigateTo("/login/userDetails")
    }
    
    return(
        <div className="container mt-5 position-relative">
            <h1>Elimina Utente</h1>
                       
            
            <div className="group-form position-absolute top-50 start-50 translate-middle">
            <h2>Dati Utente</h2>
                <p>Nome: {deleteUserData.nome}</p>
                <p>Cognome: {deleteUserData.cognome}</p>
                <p>Email: {deleteUserData.email}</p>
                <p>Ruolo: {deleteUserData.ruoli == "" ? "nessuno" : deleteUserData.ruoli}</p>            
                <button className="btn btn-lg btn-danger" onClick={handleClickElimina}>Elimina</button>
                {successDelete? <>
                <div style={{backgroundColor: "green", marginTop: "1rem", textAlign:"center"}}>cancellazione avvenuta con successo</div>
                <button className="btn btn-lg btn-primary" onClick={handleClick}>Torna alla pagina iniziale</button>
                </> : <></>}
            </div>
        </div>
    );
}