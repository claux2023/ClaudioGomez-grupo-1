import React from 'react';
import planeta from '../../img/planeta.mp4';

export default function AcercaDe() {
    return (
        <div className='relative w-full min-h-screen flex flex-col'>
        <video 
            className='absolute inset-0 w-full h-full object-cover -z-10'
            src={planeta}
            autoPlay
            loop
            muted
        />
        <div className='relative flex flex-col justify-center items-center w-full min-h-screen text-white px-4 py-16'>
            <h1 className='text-3xl md:text-5xl font-bold mb-12'>Quienes Somos</h1>
            <p className='w-full md:w-3/4 lg:w-2/3 md:text-lg lg:text-xl text-justify mb-12'>
            CLAX INFORMÁTIC ES UNA EMPRESA CHILENA, QUE COMENZÓ SUS OPERACIONES EN AGOSTO DEL AÑO 2024, TRANSFORMÁNDOSE DURANTE ESTE TIEMPO, EN LA MAYOR CADENA DE TIENDAS ESPECIALISTA EN TECNOLOGÍA DEL PAÍS.
            EMPEZAMOS NUESTRA HISTORIA ENFOCADOS EN EL RUBRO DE LAS COMPUTADORAS DE ESCRITORIO, PERO CRECIMOS SIN PARAR HASTA LOGRAR UN MIX INIGUALABLE DE PRODUCTOS TECNOLÓGICOS, TANTO PARA PERSONAS COMO PARA PEQUEÑAS Y MEDIANAS EMPRESAS.
            TENEMOS ADICIONALMENTE A TODO LO RELACIONADO AL RUBRO DE LA COMPUTACIÓN OPCIONES EN TELEFONÍA, AUDIO, SEGURIDAD Y ENTRETENIMIENTO (JUEGOS Y CONSOLAS).
            </p>
            <div className='w-full text-center'>
            <h2 className='text-2xl md:text-3xl font-bold mb-8'>Nuestros Proveedores</h2>
            <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
                <li className='flex justify-center items-center h-16 md:h-24'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/1280px-Nintendo.svg.png" 
                    alt="logo nintendo" 
                    className='max-h-full max-w-full object-contain'
                />
                </li>
                <li className='flex justify-center items-center h-16 md:h-24'>
                <img 
                    src="https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/360_197_1.png?$720_N_PNG$" 
                    alt="logo samsung" 
                    className='max-h-full max-w-full object-contain'
                />
                </li>
                <li className='flex justify-center items-center h-16 md:h-24'>
                <img 
                    src="https://i.pinimg.com/originals/6b/50/74/6b50742de8431d599319cb15f7225871.png" 
                    alt="logo JBL" 
                    className='max-h-full max-w-full object-contain'
                />
                </li>
                <li className='flex justify-center items-center h-16 md:h-24'>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Branding_lenovo-logo_lenovologoposred_low_res.png/1200px-Branding_lenovo-logo_lenovologoposred_low_res.png" 
                    alt="logo lenovo" 
                    className='max-h-full max-w-full object-contain'
                />
                </li>
                <li className='flex justify-center items-center h-16 md:h-24'>
                <img 
                    src="https://1000marcas.net/wp-content/uploads/2019/12/Huawei-Logo.jpg" 
                    alt="logo huawei" 
                    className='max-h-full max-w-full object-contain'
                />
                </li>
            </ul>
            </div>
        </div>
        </div>
    );
};