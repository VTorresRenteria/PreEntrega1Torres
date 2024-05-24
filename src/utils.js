import { collection, getDocs, getDoc, doc, getFirestore, query, where, addDoc, serverTimestamp } from "firebase/firestore"
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
            const productos = resultado.docs.map(doc => {
                const producto = doc.data()
                producto.id = doc.id
                return producto
            })
            return productos
        })
        .catch((error) => {
            console.log(error)
        })
}

export const getProductDetail = (id) => {
    const db = getFirestore(app)
    const productsCollection = collection(db, "agentes")
const filtro = doc(productsCollection, id)
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

export const createSale = () => {
    const db = getFirestore(app)
    const salesCollection = collection(db, "ventas")

    const venta = {

    }

    const consulta = addDoc(salesCollection, venta)

    consulta
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        })

}
