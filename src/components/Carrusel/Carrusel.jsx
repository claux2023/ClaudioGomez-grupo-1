import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/8014962_01/w=1500,h=1500,fit=pad',
      titulo: '',
      descripcion: '',
    },
    {
      imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/135525190_01/public',
      titulo: '',
      descripcion: '',
    },
    {
      imagen: 'https://www.falabella.com/cdn-cgi/imagedelivery/4fYuQyy-r8_rpBpcY7lH_A/falabellaCL/17084678/width=240,height=240,quality=70,format=webp,fit=pad',
      titulo: '',
      descripcion: '',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative h-96 w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full ${
            currentSlide === index ? 'block' : 'hidden'
          }`}
          style={{
            backgroundImage: slide.imagen ? `url(${slide.imagen})` : 'none',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">
              {slide.titulo}
            </h1>
            <p className="text-lg text-white opacity-80 mb-12">
              {slide.descripcion}
            </p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentSlide === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;