import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const NavBar :FC = () =>{

    return (
        <nav className="navbar navbar-light navbar-expand-lg navbar-background sticky-top text-dark justify-content-between" style={{backgroundColor:'#f8ffe5', marginBottom: '2rem'}}>
            <div className="container-fluid">
                <a className="navbar-brand d-flex sticky-top" href="/">
                    <h1 className="fs-1 d-flex align-items-end m-0 text-dark">Cinema</h1> 
                </a>
                <button className="navbar-toggler sticky-top" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow-0 " id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <a className="d-flex align-items-center ms-4 nav-link rounded-3 text-dark" href="./">Home</a>
                        <a className="d-flex align-items-center ms-4 nav-link rounded-3 text-dark" href="./movies">Movies</a>
                        <a className="d-flex align-items-center ms-4 nav-link rounded-3 text-dark" href="./series">Series</a>
                        <a className="d-flex align-items-center ms-4 nav-link rounded-3 text-dark" href="./users">Users</a>
                        <a className="d-flex align-items-center ms-4 nav-link rounded-3 text-dark"   href="./admin">Admin</a>
                        <a className="d-flex align-items-center ms-4 nav-link rounded-3 text-dark"  href="./exit">Extit</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export { NavBar }