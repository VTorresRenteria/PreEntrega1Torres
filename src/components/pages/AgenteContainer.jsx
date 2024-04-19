import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Agente from "./Agente";


function AgenteContainer() {

    const { uuid } = useParams()
    const [Agent, setAgent] = useState({})

    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents/" + uuid + "?isPlayableCharacter&language=es-MX")
            .then((res) => {
                return res.json()
            })
            .then((Agente) => {
                setAgent(Agente.data)
            })
    }, []);

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md p-4">
            <Agente Agente={Agent} />
        </div>
    )

}

export default AgenteContainer