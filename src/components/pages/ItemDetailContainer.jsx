import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import { getProductDetail } from "../../utils";


function ItemDetailContainer() {

    const { id } = useParams()
    const [Agent, setAgent] = useState({})

    useEffect(() => {
        getProductDetail(id)
        .then((resultado)=>{
            setAgent(resultado)
        })
    }, []);

    return (
        <div>
            <ItemDetail Agente={Agent} />
        </div>
    )

}

export default ItemDetailContainer