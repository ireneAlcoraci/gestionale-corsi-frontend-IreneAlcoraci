import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "../../components/table/Table";
import { getAllUsers } from "../../service/RESTService";

export function UserList() {
    const navigateTo = useNavigate();

    useEffect(() => {
        document.title = "User List";
        handleChange();
    }, []);

    const [userListData, setUserListData] = useState([]);

    const handleChange = async () => {
        const userList = await getAllUsers();
        setUserListData(userList);
    }

    const handleClick = () =>{
        navigateTo("/login/userList/searchUser")
    }


    return (
        <div className="container">
            <h1 className="text-center my-5">Lista Utenti</h1>
            <button className="btn btn-lg btn-primary" style={{margin: "1rem 0rem"}} onClick={handleClick}>Trova Utente</button>
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
                {userListData.map((user,key) => (
                    <Table
                        key={key}
                        id={user.id}
                        nome={user.nome}
                        cognome={user.cognome}
                        email={user.email}
                        ruolo={user.ruoli.map(ruoli => ruoli.tipologia).join(" , ")}/>
                 

                ))}

            </table>
        </div>

    );
}