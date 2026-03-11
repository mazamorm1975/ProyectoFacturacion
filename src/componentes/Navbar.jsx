import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
            <div className="container-fluid">
                <span className="navbar-brand">Registro De Usuarios</span>

                <ul className="navbar-nav ms-5">
                           <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/listado">
                            Listado
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/nuevo_registro">
                            Ingresar Usuario
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}