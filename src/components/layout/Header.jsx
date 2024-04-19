import NavBar from "./NavBar";

function Header() {
    return (
        <header className="flex justify-around p-4 bg-red-600">
            <h1>Valorant Agentes</h1>
            <NavBar/>
        </header>
    )
}
export default Header