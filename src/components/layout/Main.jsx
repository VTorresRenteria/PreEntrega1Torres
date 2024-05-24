import { Routes, Route } from 'react-router-dom'
import ItemDetailContainer from '../pages/ItemDetailContainer'
import Cart from '../pages/Cart'
import ItemListContainer from '../widgets/ItemListContainer'

function Main() {
    return (
        <main className='p-4 text-white grow bg-black min-h-screen'>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/Rol/:role" element={<ItemListContainer />} />
                <Route path="/Agentes/:id" element={<ItemDetailContainer />} />
                <Route path="/Carrito" element={<Cart/>} />
                <Route path="*" element={<p>No encontrado</p>} />
            </Routes>
        </main>
    )
}

export default Main