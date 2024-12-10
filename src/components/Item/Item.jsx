import { Link } from "react-router-dom";
import React from "react";

export default function Item({id, nombre, precio,stock,categoria,imagen}){
    
    return(
        <div className="bg-white  h-full max-w-lg border-collapse shadow-md text-center justify-center"> 
                <Link to={`/products/${id}`}><img src={imagen} alt={nombre}/></Link>
                <h6 className="text-lg font-bold mb-2">{nombre}</h6>
                <p className="text-lg font-bold mb-2">$ {precio.toLocaleString()}</p>
                <p className="text-lg">Stock:{stock}</p>
                <p className="text-lg mb-2 ">Categoria:{categoria}</p>
        </div>
    );
};