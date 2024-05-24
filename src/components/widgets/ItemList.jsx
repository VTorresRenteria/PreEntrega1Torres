import Item from "./Item"

function ItemList({ characters }) {
    return (
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
            {characters.map((character) => {
                return <Item key={character.id} character={character} />
            })}
        </section>
    )
}

export default ItemList