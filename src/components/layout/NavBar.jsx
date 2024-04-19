import CartWidget from "../widgets/CartWidget.jsx"
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="flex items-center gap-4">
                <div className="items-center hidden md:flex md:gap-4">
                <Link to="/">Inicio</Link>
                <Link to="/Agentes">Agentes</Link>
                <Link to="roles/Iniciadores">Iniciadores</Link>
                <Link to="roles/Controladores">Controladores</Link>
                </div>
                <CartWidget />
            </nav>
        
    )
}

export default NavBar