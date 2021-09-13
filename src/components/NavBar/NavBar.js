import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <nav className="navBar">
            <ul>
                <li><a href="#" className="active">Coffee Shop</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar

