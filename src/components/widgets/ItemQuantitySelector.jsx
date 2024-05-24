import { useState } from "react"

function ItemQuantitySelector(props) {

    const [numero, setNumero] = useState(0)

    const incrementar = () => {
        setNumero(numero + 1)
    }

    const decrementar = () => {
        if (numero > 0) {
            setNumero(numero - 1)
        }
    }

    const confirmar = () => {
        props.handleConfirm(numero)
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-4">
                <button onClick={decrementar} className="w-12 h-12 text-white bg-gray-800 hover:bg-gray-900 rounded-full shadow-md flex items-center justify-center transition duration-300 ease-in-out">-</button>
                <p className="text-xl font-semibold text-white">{numero}</p>
                <button onClick={incrementar} className="w-12 h-12 text-white bg-red-600 hover:bg-red-700 rounded-full shadow-md flex items-center justify-center transition duration-300 ease-in-out">+</button>
            </div>
            <button onClick={confirmar} className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-900 rounded-lg shadow-md transition duration-300 ease-in-out">Agregar a carrito</button>
        </div>
    )
}

export default ItemQuantitySelector