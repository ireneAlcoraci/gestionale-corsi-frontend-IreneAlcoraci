import { useNavigate } from "react-router-dom";

export function Table(props){
    const navigateTo = useNavigate();

    const handleClick= ()=>{
        navigateTo(`/login/userList/deleteUser/${props.email}`)
    }

    return(        
      <tbody>
      <tr>
          <td>{props.id}</td>
          <td>{props.nome}</td>
          <td>{props.cognome}</td>
          <td>{props.email}</td>
          <td>{props.ruolo !== ""? props.ruolo : "nessuno" }</td>
          <td><button className="btn btn-danger"onClick={handleClick}>Elimina</button></td>
      </tr>
  </tbody>
    );
}