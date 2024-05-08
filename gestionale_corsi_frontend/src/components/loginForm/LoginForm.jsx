import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../service/RESTService";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";


export function LoginForm() {
    const navigateTo = useNavigate();

    const [formLoginData, setFormLoginData] = useState({
        email: "",
        password: ""
    });

    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormLoginData({...formLoginData, [name]:value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.table(formLoginData);

        const data = await userLogin(formLoginData);
        const jwtToken = data.token;
        console.log(jwtToken);
        Cookies.set("token", jwtToken);

        const decode = jwtDecode(jwtToken);
        Cookies.set("nome", decode.nome);
        Cookies.set("cognome", decode.cognome);
        Cookies.set("email", decode.email);
        Cookies.set("ruolo", decode.ruoli);

       
        if(data !== undefined){
            navigateTo("/userDetails")
        }

        
    }

   
    return (
        <form className="container my-5" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formLoginData.email} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={formLoginData.password} onChange={handleChange}/>
            </div>
           <button type="submit" className="btn btn-primary">Accedi</button>
        </form>
    );
}