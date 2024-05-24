import { Link } from "react-router-dom";

function Item({ character }) {

    const { displayName , displayIcon , id } = character

    return (
        <div className="p-4 transition-transform duration-300 rounded-lg shadow-lg user-card hover:scale-105 group bg-gradient-to-r from-gray-800 to-gray-600">
            <div className="overflow-hidden aspect-video">
                <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-110 shadow-md" 
                src={displayIcon} alt="card image" />
            </div>
            <h2 className="my-2 text-lg font-bold text-white text-center">{displayName}</h2>
            <Link className="block px-4 py-2 mt-2 text-sm font-bold text-center text-white bg-red-600 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500" to={`/Agentes/${id}`}>ver mas</Link>
        </div>
    )
}


export default Item