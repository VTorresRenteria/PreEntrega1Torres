import { collection, getDocs, getDoc, doc, getFirestore, query, where, addDoc } from "firebase/firestore"
import { app } from "./firebase"


export const getProducts = () => {

    const db = getFirestore(app)
    const agentesCollection = collection(db, "agentes")
    const query = getDocs(agentesCollection)

    return query
        .then((resultado) => {
            const agente = resultado.docs.map(doc => {
                const agente = doc.data() 
                agente.id = doc.id
                return agente
            })
            return agente
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getProductsFromCategories = (rol) => {
    const db = getFirestore(app)
    const agentesCollection = collection(db, "agentes")
    const filtro = query(agentesCollection, where("role", "==", rol))
    const consulta = getDocs(filtro)

    return consulta
        .then((resultado) => {
            const agentes = resultado.docs.map(doc => {
                const agente = doc.data()
                agente.id = doc.id
                return agente
            })
            return agentes
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getProductDetail = (id) => {
    const db = getFirestore(app)
    const agentesCollection = collection(db, "agentes")
const filtro = doc(agentesCollection, id)
    const consulta = getDoc(filtro)

    return consulta
        .then((resultado) => {
            const producto = resultado.data()
            producto.id = resultado.id
            return producto
        })
        .catch((error) => {
            console.log(error)
        })
}

export const createSale = async (compra) => {
    const db = getFirestore();
    const salesCollection = collection(db, "ventas");

    const venta = {
        cliente: compra.cliente,
        items: compra.items,
    };

    try {
        const docRef = await addDoc(salesCollection, venta);
        return docRef.id;
    } catch (error) {
        console.error("Error al crear la venta:", error);
        return null;
    }
};
