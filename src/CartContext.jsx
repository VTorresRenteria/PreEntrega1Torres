import React, { createContext, useState } from "react";

export const CartContext = createContext();
const { Provider } = CartContext;

function CarritoProvider(props) {

    const [cantCarrito, setCantCarrito] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (cant, item) => {
        const existingItemIndex = carrito.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCarrito = [...carrito];
            updatedCarrito[existingItemIndex].cantidad += cant;
            setCarrito(updatedCarrito);
        } else {
            const updatedCarrito = [...carrito, { ...item, cantidad: cant }];
            setCarrito(updatedCarrito);
        }

        setCantCarrito(cantCarrito + cant);
        setPrecioTotal(precioTotal + item.price * cant);
    }

    const borrarDelCarrito = (id) => {
        const copia = [...carrito];
        const itemIndex = copia.findIndex((item) => item.id === id);

        if (itemIndex > -1) {
            const item = copia[itemIndex];
            if (item.cantidad > 1) {
                item.cantidad -= 1;
                setCantCarrito(cantCarrito - 1);
                setPrecioTotal(precioTotal - item.price);
            } else {
                copia.splice(itemIndex, 1);
                setCantCarrito(cantCarrito - 1);
                setPrecioTotal(precioTotal - item.price);
            }
            setCarrito(copia);
        }
    }

    const vaciarCarrito = () => {
        setPrecioTotal(0)
        setCantCarrito(0)
        setCarrito([])
    }

    const valorActual = {
        carrito: carrito,
        cantCarrito: cantCarrito,
        precioTotal: precioTotal,
        agregarAlCarrito: agregarAlCarrito,
        borrarDelCarrito: borrarDelCarrito,
        vaciarCarrito: vaciarCarrito,
    }

    return (
        <Provider value={valorActual}>
            {props.children}
        </Provider>
    )
}

export default CarritoProvider
