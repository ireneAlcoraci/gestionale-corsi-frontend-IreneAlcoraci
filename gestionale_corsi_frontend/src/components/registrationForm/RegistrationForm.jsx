import { useState } from "react";
import { userRegistration } from "../../service/RESTService";
import { validationFormRegistration } from "../../service/Validation";


export function RegistrationForm(){
    const [formRegistationData, setFormRegistrationData] = useState({
        nome: "",
        cognome:"",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormRegistrationData({...formRegistationData, [name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.table(formRegistationData);
        setErrors(validationFormRegistration(formRegistationData))

        const response = userRegistration(formRegistationData);

        if(response.ok){
            console.log("registrazione avvenuta con successo");
        }

    }


    return(
        <form className="container needs-validation col-sm-8 mt-3" onSubmit={handleSubmit}>
            <p className="lead h3">Dati Anagrafici</p>

            <div className="form-group">
                <label htmlFor="nome">Nome *</label>
                <input id="nome" name="nome" type="text" className="form-control" value={formRegistationData.nome} onChange={handleChange} required/>
                {errors.nome && <div className="invalid-feedback">
                    {errors.nome}
                </div>}
                <label htmlFor="cognome">Cognome *</label>
                <input id="cognome" name="cognome" type="text" className="form-control" value={formRegistationData.cognome} onChange={handleChange} required/>
                {errors.cognome && <div className="invalid-feedback">
                    {errors.cognome}
                </div>}                                  
            </div>

            <p className="lead h3">Autenticazione</p>
            <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input name="email" id="email" type="email" className="form-control" size="32" value={formRegistationData.email} onChange={handleChange} required/>
                {errors.email && <div className="invalid-feedback">
                    {errors.email}
                </div>}
            </div>

            <div className="form-group">
                <label htmlFor="pass">Password *</label>
                <input name="password" id="pass" type="password" className="form-control" title="Almeno 8 caratteri, una lettera maiuscola e un numero" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$" size="32" value={formRegistationData.password} onChange={handleChange} required/>
                {errors.password && <div className="invalid-feedback">
                    {errors.password}
                </div>}
            </div>

            <div className="form-group">
                <label htmlFor="repass">Reinserisci password *</label>
                <input name="repass" id="repass" type="password" className="form-control" size="32" required/>
                <div className="invalid-feedback">
                    Le password devono coincidere
                </div>
            </div>
            <button name="ok" id="ok" type="submit" className="btn btn-primary mt-3">Invia</button>
        </form>
    );
}