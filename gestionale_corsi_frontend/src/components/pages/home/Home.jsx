import { useEffect } from "react";

export function Home() {
    useEffect(() => {
        document.title = "Home"
    }, []);

    return (
        <div className="container align-items-center justify-content-center ">
            <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="text-center">Benvenuto della pagina</h1>
                <p>Non sei registrato? Registrati per accedere a tutte le fantastiche funzionalità</p>
                <div className="gap-4 d-flex justify-content-center">
                    <button className="btn btn-lg btn-primary">Accedi</button>
                    <button className="btn btn-lg btn-primary">Iscriviti</button>
                </div>
            </div>

        </div>
    );
}