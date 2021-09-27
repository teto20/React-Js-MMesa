import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navBar">
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">Coffee Shop</NavLink>
                </li>
                <li>
                    <NavLink exact to="/tienda" activeClassName="active">Tienda</NavLink>
                </li>
                <li>
                    <NavLink exact to="/nosotros" activeClassName="active">Nosotros</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contacto" activeClassName="active">Contacto</NavLink>
                </li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar

