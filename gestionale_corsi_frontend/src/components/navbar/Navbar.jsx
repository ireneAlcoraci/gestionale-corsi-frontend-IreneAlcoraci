import {NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" >
            <div className="container-fluid">
                <div className="navbar-brand">Gestionale corsi</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/courses" >Corsi</NavLink>
                        <NavLink className="nav-link" to="/contacts" >Contatti</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}