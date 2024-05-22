import { toast } from "react-toastify"
import useCart from "../../hooks/useCart"
import Contador from "../widgets/Contador"

function Agente(props) {

    const valorDelContexto = useCart()

    const handleConfirm = (numero) => {
        valorDelContexto.agregarAlCarrito(numero, props.Agente)
        toast.success("agregado al carrito")
    }

    return (
        <>
            <div className="max-w-4xl mx-auto bg-black text-white shadow-lg rounded-lg p-6">
                <p className="text-2xl font-bold mb-4 text-center lg:text-left">Detalle de Agente</p>
                <h2 className="text-xl font-semibold mb-6 text-center lg:text-left">{props.Agente.displayName}</h2>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex justify-center lg:justify-end">
                        <img className="h-auto w-full lg:w-3/4 object-cover rounded-lg mb-6 lg:mb-0" src={props.Agente.fullPortrait} alt={props.Agente.displayName} />
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <div>
                            <h3 className="text-lg font-medium">Precio</h3>
                            <p className="text-gray-400">{props.Agente.price}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Descripción</h3>
                            <p className="text-gray-400">{props.Agente.description}</p>
                        </div>
                        <Contador handleConfirm={handleConfirm} />
                    </div>
                </section>
            </div>
        </>
    )
}
export default Agente