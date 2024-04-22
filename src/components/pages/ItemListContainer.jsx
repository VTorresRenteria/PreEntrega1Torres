import { useEffect, useState } from "react"
import ItemCard from "../widgets/ItemCard"

function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        
        fetch('https://valorant-api.com/v1/agents?isPlayableCharacter&language=es-MX')
            .then((response) => response.json())
            .then((json) => { setItems(json.data)})
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <>
            {items.map((character) => {
                return <ItemCard key={character.uuid} character={character} />
            })}
        </>
    )
}

export default ItemListContainer