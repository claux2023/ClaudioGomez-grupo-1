    import React from 'react';
    import { Link } from 'react-router-dom';
    import useCarritoStore from '../../store/CarritoStore';
    import { IoTrashBinOutline } from "react-icons/io5";

    const Carrito= () => {
    const { productos, total, eliminarProducto, vaciarCarrito, actualizarCantidad} = useCarritoStore();

    const handleActualizarCantidad = (id, cantidad) => {
        if (cantidad < 1) {
            cantidad = 1;
        }
        actualizarCantidad(id, cantidad);
        };

    return (
        <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md  text-center py-52 px-4 md:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-10 ">Carrito de compras</h2>
        {productos.length > 0 ? (
            <ul>
            {productos.map((producto) => (
                <li key={producto.id} className="flex flex-col md:flex-row justify-between items-center mb-4">
                <img 
                    src={producto.imagen} 
                    alt={producto.nombre} 
                    className="w-20 h-20 object-cover mr-4" 
                />
                <span className="text-lg">{producto.nombre}</span>
                <span className="text-lg font-bold">${producto.precio * producto.cantidad}</span>
                <div className='flex justify-center'>
                    <button onClick={() => handleActualizarCantidad(producto.id, producto.cantidad - 1)} className='rounded-[5px] hover:bg-blue-700 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> - </button>
                    <p className='text-[20px] px-[10px]'>{producto.cantidad}</p>
                    <button onClick={() => handleActualizarCantidad(producto.id, producto.cantidad + 1)} className='rounded-[5px] hover:bg-blue-700 hover:text-[#ffffff] w-[50px] border-[1px] text-[20px] flex justify-center'> + </button>
                </div>
                <button
                    onClick={() => eliminarProducto(producto.id)}
                    className=" hover:bg-red-700  px-5  rounded">
                    <IoTrashBinOutline className="w-8 h-8" />
                </button>
                </li>
            ))}
            </ul>
        ) : (
            <p className="text-lg text-gray-500">Carrito vacío</p>
        )}
        <p className="text-lg font-bold mb-4">Total: ${total.toLocaleString('es-CL')}</p>
        <div className="flex justify-center">
            <button
            onClick={vaciarCarrito}
            className="bg-orange-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Vaciar carrito
            </button>
            <Link to="/ItemList" className="bg-green-700 text-white font-bold py-2 px-4 ml-5 rounded">
                Volver a la tienda 
            </Link>
        </div>
        </div>
    );
    };

    export default Carrito;