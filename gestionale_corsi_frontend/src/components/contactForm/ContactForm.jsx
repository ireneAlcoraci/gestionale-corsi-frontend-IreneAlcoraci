import { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userEmail: "",
        message: ""
    });

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.table(formData);
    }


    return (
        <form onSubmit={handleSubmit} className="container my-5">
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Nome</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="nome" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Cognome</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="cognome" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" name="userEmail" value={formData.userEmail} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Messaggio </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="messaggio" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Invia</button>
        </form>
    );
}