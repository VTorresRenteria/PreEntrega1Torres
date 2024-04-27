import { Routes, Route } from 'react-router-dom'
import Agentes from '../pages/Agentes'
import AgenteContainer from '../pages/AgenteContainer'

function Main() {
    return (
        <main className='p-4 text-white grow mi-main bg-black'>
            <Routes>

                <Route path="/" element={<Agentes />} />
                <Route path="/Rol/:role" element={<Agentes />} />
                <Route path="/Agentes/:uuid" element={<AgenteContainer />} />
                <Route path="*" element={<p>No encontrado</p>} />

            </Routes>
        </main>
    )
}

export default Main