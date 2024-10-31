import React from 'react';
import Carousel from '../Carousel'; 
import "./segunda.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../Firebase/firebaseConfig';

const CartasPer2 = ({ id ,name = 'N/A', images = [], jutsu = [], father = 'N/A', birthdate = 'N/A', sex = 'N/A',
  bloodType = 'N/A', kekkeiGenkai = [], classification = 'N/A' }) => {
    const subir = async () => {
      try {
        const infor = {
          nombre: name,
          imagen: images,
          idCar: id
        };
        await setDoc(doc(db, "favoritos", name), infor);
        console.log("Información subida correctamente:", infor);
      } catch (error) {
        console.error("Error subiendo la información: ", error);
      }
    };
  
  return (
    <>
      <div>
        <div id='contor2'>
          <div id='imgae2'>
            {images.length > 0 ? (
              <Carousel images={images} />
            ) : (
              <img src="/path/to/default-image.jpg" alt="Imagen no disponible" />
            )}
          </div>
          <div id='info2'>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Fecha de nacimiento:</strong> {birthdate}</p>
            <p><strong>Sexo:</strong> {sex}</p>
            <p><strong>Tipo de Sangre:</strong> {bloodType}</p>
            <p><strong>Clasificación:</strong> {classification}</p>
            <p><strong>Padre:</strong> {father}</p>

            <h3>Jutsus</h3>
            {jutsu.length > 0 ? jutsu.map((j, index) => (
              <p key={index}>{j}</p>
            )) : <p>N/A</p>}

            <h3>Kekkei Genkai</h3>
            {kekkeiGenkai.length > 0 ? kekkeiGenkai.map((kg, index) => (
              <p key={index}>{kg}</p>
            )) : <p>N/A</p>}
          </div>
        </div>
      </div>

      <IconButton aria-label="add to favorites" onClick={subir}>
        <button type='button'><FavoriteIcon /></button>
      </IconButton>
    </>
  );
}

export default CartasPer2;
