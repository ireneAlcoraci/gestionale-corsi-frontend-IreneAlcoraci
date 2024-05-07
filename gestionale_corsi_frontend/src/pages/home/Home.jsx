import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigateTo = useNavigate();

    useEffect(() => {
        document.title = "Home"
    }, []);

    const handleClickAccedi = () =>{
        navigateTo("/login")
    }

    const handleClickIscriviti = () =>{
        navigateTo("/registration")
    }

    return (
        <div className="container align-items-center justify-content-center ">
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="text-center">Benvenuto della pagina</h1>
                <p>Non sei registrato? Registrati per accedere a tutte le fantastiche funzionalità</p>
                <div className="gap-4 d-flex justify-content-center">
                    <button className="btn btn-lg btn-primary" onClick={handleClickAccedi}>Accedi</button>
                    <button className="btn btn-lg btn-primary" onClick={handleClickIscriviti}>Iscriviti</button>
                </div>
            </div>

        </div>
    );
}