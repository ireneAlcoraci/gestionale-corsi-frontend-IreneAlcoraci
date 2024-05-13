import { useState } from "react";
import { Table } from "../table/Table";
import { findUserByEmail } from "../../service/RESTService";


export function SearchUserForm() {
     const [formData, setFormData] = useState({
        email: ""
    });

    const [dataUser, setDataUser] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table(formData);
        const data = await findUserByEmail(formData.email);
        console.log(data);
        setDataUser(data);
    }
  

    return (
        <div className="container">
            <h1 className="text-center my-5">Cerca Utente</h1>

            <form onSubmit={handleSubmit} className="container my-5">
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label h5">Inserisci email</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Cerca</button>
            </form>

            <table className="table" id="idTabella" >
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">nome</th>
                        <th scope="col">cognome</th>
                        <th scope="col">email</th>
                        <th scope="col">ruoli</th>
                    </tr>
                </thead>
                {dataUser? <Table
                    id={dataUser.id}
                    nome={dataUser.nome}
                    cognome={dataUser.cognome}
                    email={dataUser.email}
                    ruolo={dataUser.ruoli.map(ruoli => ruoli.tipologia).join(" , ") === "" ? "nessuno" : dataUser.ruoli.map(ruoli => ruoli.tipologia).join(" , ")} /> : <></>}

            </table>
        </div>
    );
}