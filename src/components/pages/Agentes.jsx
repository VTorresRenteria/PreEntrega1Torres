import ItemListContainer from "./ItemListContainer"

function Agentes() {
    return (
        <div>
        <h2>Agentes</h2>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 users">
            <ItemListContainer />
        </section>
        </div>
    )
}

export default Agentes