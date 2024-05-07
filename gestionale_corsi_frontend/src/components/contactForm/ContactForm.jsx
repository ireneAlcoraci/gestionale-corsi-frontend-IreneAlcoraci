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
        <form onSubmit={handleSubmit} className="container mt-5">
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">First name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="name" name="firstName" value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Last name</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="last name" name="lastName" value={formData.lastName} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" name="userEmail" value={formData.userEmail} onChange={handleChange}/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" placeholder="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Invia</button>
        </form>
    );
}