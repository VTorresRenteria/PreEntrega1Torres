import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Agentes from '../pages/Agentes'
import AgenteContainer from '../pages/AgenteContainer'

function Main() {
    return (
        <main className='p-4 text-white grow mi-main bg-slate-600'>
            <Routes>

                <Route path="/" element={<Inicio />} />
                <Route path="/Agentes" element={<Agentes />} />

                <Route path="/Agentes/:uuid" element={<AgenteContainer/>} />
                <Route path="*" element={<p>No encontrado</p>} />

            </Routes>
        </main>
    )
}

export default Main