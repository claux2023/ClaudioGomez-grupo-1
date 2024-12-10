import React from 'react';
import hadware from '../../img/hadware.mp4'
import { Link} from 'react-router-dom';
export default function Home() {
    return(
        <div className='w-full h-screen top-[90px] '>
            <video 
                className='object-cover h-full w-full absolute -z-10'
                src={hadware}
                autoPlay
                loop
                muted
            />
            <div className=' w-full h-[80%] flex flex-col justify-center items-center text-white px-4 text-center '>
                <h1 className='py-2 text-4xl font-bold'>Bienvenido</h1>
                <p className='text-xl py-4 mt-10 text-justify'>"Descubre nuestra página web, donde encontrarás todo lo que necesitas en tecnología para ti y tu familia. Ofrecemos una amplia gama de productos para todas tus necesidades, desde dispositivos electrónicos hasta accesorios que mejoran tu vida diaria"</p>
                <Link to="/ItemList" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Ir a productos
                </Link>
            </div>
        </div>
    );
};
