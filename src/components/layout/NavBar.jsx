import CartWidget from "../widgets/CartWidget.jsx"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="flex items-center gap-4">
                <div className="items-center hidden md:flex md:gap-4">
                <Link to="/Rol/Iniciador">Iniciadores</Link>
                <Link to="/Rol/Controlador">Controladores</Link>
                </div>
                <CartWidget />
            </nav>
        
    )
}

export default NavBar