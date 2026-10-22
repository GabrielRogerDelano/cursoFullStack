import { Link, NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/sobre">Sobre nos</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contato">Nosso contato</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

