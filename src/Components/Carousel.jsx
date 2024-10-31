import React, { useState } from 'react';
import "./Carousel.css";

const Carousel = ({ images }) => {
  const [imagen, setImagen] = useState(0);

  const Anterior = () => {
    setImagen(imagen === 0 ? images.length - 1 : imagen - 1);
  };

  const Siguiente = () => {
    setImagen(imagen === images.length - 1 ? 0 : imagen + 1);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={Anterior}>❮</button>
      
      <div className="carousel-image">
        <img src={images[imagen]} alt={`Slide ${imagen}`} />
      </div>
      
      <button className="carousel-button next" onClick={Siguiente}>❯</button>
    </div>
  );
};

export default Carousel;



