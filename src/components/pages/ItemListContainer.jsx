import { useEffect, useState } from "react"
import ItemCard from "../widgets/ItemCard"

const options = {
    method: 'GET',

    headers: {
        'Accept': 'application/json'
    }
}
function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents?isPlayableCharacter&language=es-MX', options)
            .then((response) => response.json())
            .then((json) => { setItems(json.data); console.log(json) })
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