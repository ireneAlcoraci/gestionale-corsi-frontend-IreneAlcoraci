export function Card(props) {
    return (
        <div className="col">
            <div className="card m-2" style={{ width: "18rem}" }}>
                <div className="card-body">
                    <h5 className="card-title">{props.titolo}</h5>
                    <p>durata: {props.durata} settimane</p>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{props.sottotitolo}</h6>
                    <p className="card-text">{props.body}</p>
                </div>
            </div>
        </div>
    );

}