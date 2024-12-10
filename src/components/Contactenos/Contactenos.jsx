    import React from 'react';
    import mundo from '../../img/mundo2.mp4';
    import { Link } from 'react-router-dom';

    export default function Contactenos() {
    return (
        <div className="w-full h-[90vh] relative">
        <video
            className="absolute top-0 left-0 object-cover h-full w-full -z-10"
            src={mundo}
            autoPlay
            loop
            muted
        />
        <div className="max-w-md sm:max-w-lg md:max-w-xl w-full mx-auto p-4 sm:p-6 bg-white-700 rounded-lg shadow-md relative z-10 text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Contactenos
            </h2>
            <form action="" onSubmit={(e) => e.preventDefault()}>
            <div className="mb-2 sm:mb-4">
                <label
                className="block text-lg sm:text-xl font-semibold mb-2"
                htmlFor="nombre"
                >
                Ingresa tu nombre completo
                </label>
                <input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 border rounded-lg bg-white-800 focus:border-blue-500"
                required
                />
            </div>
            <div className="mb-2 sm:mb-4">
                <label
                className="block text-lg sm:text-xl font-semibold mb-2"
                htmlFor="correo"
                >
                Dirección de correo electrónico
                </label>
                <input
                id="correo"
                type="email"
                placeholder="tucorreo@example.com"
                className="w-full px-2 sm:px-3 py-1 sm:py-2 border rounded-lg bg-white-800 focus:border-blue-500"
                required
                />
            </div>
            <div className="mb-2 sm:mb-4">
                <label className="block text-lg sm:text-xl font-semibold mb-2" htmlFor="mensaje">
                Mensaje
                </label>
                <textarea
                id="mensaje"
                rows="4"
                placeholder="ingresa mas detalles "
                className="w-full px-2 sm:px-3 py-1 sm:py-2 text-black border rounded-lg bg-white-800 focus:border-blue-500"
                required
                />
            </div>
            <div className="flex justify-center mt-4">
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 sm:py-2 px-5 sm:px-10 rounded text-center"
                >
                Enviar
                </button>
                <Link to="/ItemList" className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 sm:py-2 px-5 sm:px-10 ml-5 rounded">
                Volver
                </Link>
            </div>
            </form>
        </div>
        </div>
    );
    };