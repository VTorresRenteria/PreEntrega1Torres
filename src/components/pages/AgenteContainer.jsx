import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Agente from "./Agente";
import { getProductDetail } from "../../utils";


function AgenteContainer() {

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
            <Agente Agente={Agent} />
        </div>
    )

}

export default AgenteContainer