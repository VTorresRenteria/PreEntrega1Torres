import { Routes, Route } from 'react-router-dom'
import AgenteContainer from '../pages/AgenteContainer'
import Carrito from '../pages/Carrito'
import UsersCardContainer from '../widgets/UsersCardContainer'

function Main() {
    return (
        <main className='p-4 text-white grow mi-main bg-black'>
            <Routes>
                <Route path="/" element={<UsersCardContainer />} />
                <Route path="/Rol/:role" element={<UsersCardContainer />} />
                <Route path="/Agentes/:id" element={<AgenteContainer />} />
                <Route path="/Carrito" element={<Carrito/>} />
                <Route path="*" element={<p>No encontrado</p>} />
            </Routes>
        </main>
    )
}

export default Main