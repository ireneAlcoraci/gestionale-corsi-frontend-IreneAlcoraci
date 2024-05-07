import { useState } from "react";
import { userLogin } from "../../service/RESTService";

export function LoginForm() {
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

        const token = userLogin(formLoginData);
        console.log( await token);
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