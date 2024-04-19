import { Link } from "react-router-dom";

function ItemCard({ character }) {

    const { displayName , displayIcon , uuid } = character

    return (
        <div className="p-4 transition rounded-md shadow-md user-card hover:scale-105 group bg-slate-300">
            <div className="overflow-hidden aspect-video">
                <img className="w-full transition-all duration-500 rounded-md grayscale group-hover:grayscale-0 group-hover:scale-150" 
                src={displayIcon} alt="card image" />
            </div>
            <h2 className="my-2 font-bold">{displayName}</h2>
            <Link to={`/Agentes/${uuid}`}>ver mas</Link>
        </div>
    )
}


export default ItemCard;