import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header() {
    return (
        <header className="p-4 text-white shadow-md bg-red-600">
            <div className="container flex justify-between mx-auto">
                <Link to="/">
                    <h1>Valorant Agentes</h1>
                </Link>
                <NavBar />
            </div>
        </header>
    )
}
export default Header