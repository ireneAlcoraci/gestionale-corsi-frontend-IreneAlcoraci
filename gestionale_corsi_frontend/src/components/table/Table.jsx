export function Table(props){
    return(
        <table class="table" id="idTabella" >
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">nome</th>
            <th scope="col">cognome</th>
            <th scope="col">email</th>
            <th scope="col">ruoli</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.id}</td>
                <td>{props.nome}</td>
                <td>{props.cognome}</td>
                <td>{props.email}</td>
                <td>{props.ruolo}</td>
            </tr>
        </tbody>
      </table>
    );
}