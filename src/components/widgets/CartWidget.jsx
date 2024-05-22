import { ShoppingCart } from "lucide-react"
import useCart from "../../hooks/useCart"
import { Link } from "react-router-dom"

function CartWidget() {

const elValorDelContexto = useCart()

    return (
        <Link to="/Carrito" className="flex gap-2"> 
            <ShoppingCart />
            {elValorDelContexto.cantCarrito}
            </Link>
    )
}

export default CartWidget