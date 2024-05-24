import { Link } from "react-router-dom"
import { MenuIcon } from "lucide-react"
import { useState } from "react"
import CartWidget from "../widgets/CartWidget"

function NavBar() {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <header className="p-4 bg-red-600 text-white shadow-md">
            <nav className="flex items-center gap-4 ">
                <div className="container flex justify-between mx-auto">
                    <Link to="/"><h1>Valorant Agentes</h1></Link>
                </div>
                <div className="items-center hidden md:flex md:gap-4">
                    <Link to="/Rol/Iniciador">Iniciadores</Link>
                    <Link to="/Rol/Duelista">Duelistas</Link>
                    <Link to="/Rol/Centinela">Centinelas</Link>
                    <CartWidget />
                </div>
                <MenuIcon onClick={handleClick} width={20} height={20} className="md:hidden" />
            </nav>
            <nav className={`md:-left-full fixed bg-white text-black flex flex-col z-10 w-1/3 top-0 transition-all duration-300 h-full p-2 items-center gap-4  ${open ? "left-0" : "-left-full"}`}>
                <Link onClick={handleClick} to="/Rol/Iniciador">Iniciadores</Link>
                <Link onClick={handleClick} to="/Rol/Duelista">Duelistas</Link>
                <Link onClick={handleClick} to="/Rol/Centinela">Centinelas</Link>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar