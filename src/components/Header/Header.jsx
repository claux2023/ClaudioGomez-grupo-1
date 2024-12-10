import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { Link } from "react-router-dom";


export default function Menu() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
};

    return (
        <div className="w-full h-[90px] bg-black">
            <div className="max-w-[1300px] px-10 flex justify-between items-center h-full">
                <div>
                    <h1 className="text-blue-500 font-bold text-2xl hover:scale-105 duration-400"> CLAX  <span className="text-blue-300 bg-blue rounded-full">INFORMATIC</span></h1>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex text-white items-center gap-20 mx-auto">
                        <li><Link to="/" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">inicio</Link></li>
                        <li><Link to="/products/ProductosList" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">Productos</Link></li>
                        <li><Link to="/Contactenos" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">Contacto</Link></li>
                        <li><Link to="/AcercaDe" className="hover:scale-105 hover:text-blue-200  duration-700 cursor-pointer hover:text-lg">Quienes Somos</Link></li>
                        <Link to="/carrito" className="p-2 rounded-xl hover:scale-105 duration-700"><IoIosCart className="w-8 h-8" /></Link>
                    </ul>
                </div>
                {/*clax menu celular*/}
                <div onClick={handleNav} className="block md:hidden">
                    {nav ?
                    <AiOutlineClose size={30} className="text-white hover:scale-105 hover:text-blue-500 duration-500 cursor-pointer"/> :
                    <AiOutlineMenu size={30} className="text-white hover:scale-105 hover:text-blue-500 duration-500 cursor-pointer" />}
                </div>
                {/*mobile menu*/}
                <div className={nav ? 'w-full h-full bg-black/80 text-white absolute top-[90px] pt-5 left-0 flex justify-center text-center duration-700 z-50' :
                'fixed w-full h-full left-[100%] duration-700'}>
                    <ul>
                        <li><Link to="/" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">Inicio</Link></li>
                        <li><Link to="/products/ProductosList" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">Productos</Link></li>
                        <li><Link to="/Contactenos" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">Contacto</Link></li>
                        <li><Link to="/AcercaDe" className="text-2xl mb-4 hover:scale-105 duration-500 hover:text-blue-500 cursor-pointer">Quienes Somos</Link></li>
                        <Link to="/carrito" className="p-2 rounded-xl hover:scale-105 duration-700"><IoIosCart className="w-8 h-8" /></Link>
                    </ul>
                </div>
            </div>
        </div>
        );
    };