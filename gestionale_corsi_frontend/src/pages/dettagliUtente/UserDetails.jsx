import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../service/RESTService";
import Cookies from "js-cookie";


export function UserDetails(){
    const navigateTo = useNavigate();
    const {user} = useContext(AuthContext);
    

    useEffect(() => {
        document.title = "User Details"
    }, []);

    const handleClick = () =>{
        const response = userLogout(Cookies.get("token"));
        
        if(response.ok){
            Cookies.remove();
            navigateTo("/login")
        }

        
    }

    const handleClickModifica = () =>{
        
            navigateTo("/login")
        
    }

    return(
        <div className="container mt-5">
            <h1>Benvenuto {user.nome}&nbsp;{user.cognome}</h1>
            <button className="btn btn-lg btn-primary position-absolute top-0 end-0" onClick={handleClick}>Logout</button>
            
            
            <div className="group-form position-absolute top-50 start-50 translate-middle">
            <h2>Dati Utente</h2>
                <p>Nome: {user.nome}</p>
                <p>Cognome: {user.cognome}</p>
                <p>Email: {user.email}</p>
                <p>Ruolo: {user.ruolo}</p>                
                <button className="btn btn-lg btn-primary" onClick={handleClickModifica}>Modifica Utente</button>
            </div>
        </div>
    );
}