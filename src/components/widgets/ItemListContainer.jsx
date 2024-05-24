import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { getProducts, getProductsFromCategories } from "../../utils"


function ItemListContainer() {

    const [characters, setCharacters] = useState([])
    const params = useParams()

    useEffect(() => {
        
        if(params.role) {
            getProductsFromCategories(params.role)
            .then((resultado)=>{
                setCharacters(resultado)
            })
        } else {
            getProducts()
            .then((resultado)=>{
                setCharacters(resultado)
            })
        }


    }, [params.role])

    return (
        <div className="">
            <h2 className="mb-5 text-4xl font-bold text-center">Agentes</h2>
            <ItemList characters={characters} />
        </div>
    )
}

export default ItemListContainer