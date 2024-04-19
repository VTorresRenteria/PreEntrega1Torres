function Agente(props) {
    return (
        <>
            <h2 className="text-lg font-semibold mb-4 text-black text-center">Detalle de Agente {props.Agente.displayName}</h2>
            <img className="h-full w-50 object-cover mb-4" src={props.Agente.fullPortrait} alt={props.Agente.displayName} />
            <p className="text-black" >{props.Agente.description}</p>
        </>
    )
}
export default Agente