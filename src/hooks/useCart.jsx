import { useContext } from "react"
import { CartContext } from "../CartContext";

const useCart = () => {
    const valorActual = useContext(CartContext)
    return valorActual
}

export default useCart;