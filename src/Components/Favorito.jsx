import { useState, useEffect } from 'react';
import { db } from '../Firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import CartasPer from './CartasPe/CartasPer';

const Favoritos = () => {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const fetchFavoritos = async () => {
      try {
        const favoritosCollection = collection(db, "favoritos"); 
        const favoritosSnapshot = await getDocs(favoritosCollection);
        const favoritosList = favoritosSnapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id 
        }));
        setFavoritos(favoritosList);
        console.log("Favoritos recibidos:", favoritosList);
      } catch (error) {
        console.error("Error fetching favoritos: ", error);
      }
    };

    fetchFavoritos();
  }, []); 

  return (
    <div>
      <h1>Favoritos</h1>
      {favoritos.length > 0 ? (
        favoritos.map((item) => (
          <CartasPer key={item.id} name={item.nombre} images={item.imagen} />
        ))
      ) : (
        <p>No hay favoritos guardados.</p>
      )}
    </div>
  );
};

export default Favoritos;
