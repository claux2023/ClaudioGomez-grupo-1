import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs"
import { FaWhatsappSquare } from "react-icons/fa";
export default function Footer(){
    return(
        <div className=" bg-black text-white py-8 ">
            <div className="max-w-screen-lg mx-auto text-center">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div> 
                    <h2 className="font-bold mb-4">Ayuda</h2>
                    <ul className="gap-2"> 
                        <Link to="/Contactenos" className=" hover:text-blue-500  duration-700 cursor-pointer hover:text-lg">Contactenos</Link>
                        <li className="text-lg">seguimiento de mi compra</li>
                        <li className="text-lg">polictica de garantia</li>
                        <li className="text-lg">horario de atencion</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-4">Nosotros</h2>
                    <ul className="gap-2"> 
                        <Link to="/AcercaDe" className="hover:text-blue-500  duration-700 cursor-pointer hover:text-lg">Quienes somos</Link>
                        <li className="text-lg">Sucursales</li>
                        <li className="text-lg">polictica de la empresa</li>
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold mb-5">Redes Sociales</h2>
                    <ul className="gap-4 py-2"> 
                        <li className="flex items-center justify-center mb-2">
                            <Link to="https://facebook.com" target="_blank" className="hover:text-blue-600 duration-300">
                                <FaSquareFacebook size={24} />
                            </Link>
                            <p className="ml-2">@claxinformatic</p>
                        </li>
                        <li className="flex items-center justify-center mb-2">
                            <Link to="https://www.instagram.com/" target="_blank" className="text-white hover:text-rose-600 duration-300">
                                <BsInstagram size={24} />
                            </Link>
                            <p className="ml-2">@claxinformatic</p>
                        </li>
                        <li className="flex items-center justify-center mb-2">
                            <Link to="https://www.whatsapp.com/?lang=es_LA" target="_blank" className="text-white hover:text-green-600 duration-300">
                                <FaWhatsappSquare size={24} />
                            </Link>
                            <p className="ml-2">+56972155820</p>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
                <div className="text-center mt-8">
                        <p>@2024 todos los derechos reservados a claxinformatic</p>
                </div>
        </div>
    );
};