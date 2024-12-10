import React from 'react';
import Horario from '../../img/Horario.mp4';
export default function Horario() {
    return (
        <div className="w-full h-[90vh] relative">
        <video
            className="absolute top-0 left-0 object-cover h-full w-full -z-10"
            src={Horario}
            autoPlay
            loop
            muted
        />
        </div>
    );
};