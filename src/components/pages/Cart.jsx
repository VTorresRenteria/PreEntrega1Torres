import { toast } from "react-toastify";
import useCart from "../../hooks/useCart";
import { createSale } from "../../utils";

function Cart() {
    const { carrito, borrarDelCarrito, vaciarCarrito, precioTotal } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.loading("Procesando compra...");
        createSale();
        toast.dismiss();
        toast.success("Compra realizada con éxito!");
    };
    return (
        <div className="container mx-auto p-4 text-white">
            <h2 className="text-4xl font-bold mb-6">Carrito</h2>
            <ul>
                {carrito.map((item) => (
                    <li key={item.id} className="flex items-center bg-gray-800 p-4 mb-4 rounded-lg shadow-lg">
                        {item.displayName} - Cantidad: {item.cantidad} - Precio: ${item.price}
                        <button className="ml-4 bg-red-600 text-white border-2 border-black rounded-lg px-4 py-2 hover:bg-red-700 hover:border-white focus:outline-none focus:ring-2 focus:ring-red-500" onClick={() => borrarDelCarrito(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <div className="flex justify-between items-center">
                <button className="bg-red-600 text-white border-2 border-black rounded-lg px-4 py-2 hover:bg-red-700 hover:border-white focus:outline-none focus:ring-2 focus:ring-red-500" onClick={vaciarCarrito}>Vaciar Carrito</button>
                <h3 className="text-2xl font-bold">Total: ${precioTotal}</h3>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg mt-6">
                <div className="mb-4">
                    <input className="w-full px-4 py-2 text-black rounded-lg" type="text" placeholder="Nombre" required />
                </div>
                <div className="mb-4">
                    <input className="w-full px-4 py-2 text-black rounded-lg" type="text" placeholder="Teléfono" required />
                </div>
                <div className="mb-4">
                    <input className="w-full px-4 py-2 text-black rounded-lg" type="email" placeholder="Email" required />
                </div>
                <button type="submit" className="w-full bg-red-600 text-white border-2 border-black rounded-lg px-4 py-2 hover:bg-red-700 hover:border-white focus:outline-none focus:ring-2 focus:ring-red-500">
                    Comprar
                </button>
            </form>
        </div>
    );
}

export default Cart;
