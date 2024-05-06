import { useEffect } from "react";

export function Home(){
    useEffect(()=>{
        document.title = "Home"
      },[]);

    return(
        <div className="container">
            <h1>Benvenuto della pagina</h1>
            <div className="d-inline-flex gap-4">
                <button className="btn btn-lg btn-primary">Accedi</button>
                <button className="btn btn-lg btn-primary">Iscriviti</button>
            </div>           
        </div>
    );
}