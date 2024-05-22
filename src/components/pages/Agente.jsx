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
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="flex justify-center lg:justify-end">
                    <img className="h-full w-full lg:w-3/4 object-cover mb-4 lg:mb-0" src={props.Agente.fullPortrait} alt={props.Agente.displayName} />
                </div>
                <div className="flex flex-col justify-center">
                    <h2 className="text-lg font-semibold mb-4 text-center lg:text-left">Detalle de Agente {props.Agente.displayName}</h2>
                    <p className="mb-4">{props.Agente.description}</p>
                    <Contador handleConfirm={handleConfirm} />
                </div>
            </section>
        </>
    )
}
export default Agente