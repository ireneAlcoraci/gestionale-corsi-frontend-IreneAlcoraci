import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../service/RESTService";

export function ModificationForm() {
    const navigateTo = useNavigate();
    const { user, setUser } = useContext(AuthContext);

    const [errorForm, setErrorForm] = useState(false);

    const [formData, setFormData] = useState({
        nome: user.nome,
        cognome: user.cognome,
        email: user.email,
        ruoli: user.ruolo
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
        setUser(formData);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.table(user);
        const response = updateUser(user);
        if (response == "") {
            setErrorForm(true);
        }else{
            navigateTo("/login/userDetails")
        }

    }

    const handleError = () => {
        if (errorForm) {
            return "errore nella modifica"
        }
    }


    return (
        <form onSubmit={handleSubmit} className="container my-5">
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Nome</label>
                <input type="text" className="form-control" id="formGroupExampleInput" name="nome" value={formData.nome} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Cognome</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" name="cognome" value={formData.cognome} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="ruoli" className="form-label">Ruolo </label>
                <input type="text" className="form-control" id="ruoli"  name="ruoli" value={formData.ruoli} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Modifica</button>
            <div style={{backgroundColor: " rgba(243, 149, 149)", marginTop: "1rem", textAlign:"center"}}>{handleError()}</div>
        </form>
    );
}