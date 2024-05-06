import {NavLink } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#92DCE5", color: "white"}}>
            <div className="container-fluid">
                <div className="navbar-brand">Gestionale corsi</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/courses" >Courses</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}