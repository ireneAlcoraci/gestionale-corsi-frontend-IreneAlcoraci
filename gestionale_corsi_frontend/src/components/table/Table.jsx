export function Table(props){
    return(        
      <tbody>
      <tr>
          <td>{props.id}</td>
          <td>{props.nome}</td>
          <td>{props.cognome}</td>
          <td>{props.email}</td>
          <td>{props.ruolo.map}</td>
      </tr>
  </tbody>
    );
}