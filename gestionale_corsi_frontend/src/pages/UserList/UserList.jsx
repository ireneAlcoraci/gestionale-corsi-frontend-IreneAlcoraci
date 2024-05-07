import { useEffect, useState } from "react";
import { Table } from "../../components/table/Table";
import { getAllUsers } from "../../service/RESTService";

export function UserList({users}){
    useEffect(()=>{
        document.title = "User List";
        handleChange();
      },[]);

    const [userListData, setUserListData] = useState([]);
    
   const handleChange = async() =>{
        const userList = await getAllUsers();
        setUserListData(userList);
   }


    return (        
        <div className="row">
            {userListData.map((user) => (
                <Table
                    id={user.id}
                    nome={user.nome} 
                    cognome={user.cognome} 
                    email={user.email}
                    ruolo={user.ruoli}>
                </Table>

            ))}
        </div>        
    );
}