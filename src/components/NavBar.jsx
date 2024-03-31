import CartWidget from "./CartWidget.jsx"

function NavBar() {
    return (
        <header className="flex justify-around p-4 bg-red-600">
            <h1>Valorant skins</h1>
            <nav className="flex items-center gap-4">
                <div className="items-center hidden md:flex md:gap-4">
                    <a href="#">Inicio</a>
                    <a href="#">Favoritos</a>
                </div>
                <CartWidget />
            </nav>
        </header>
    )
}

export default NavBar