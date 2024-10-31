import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carta from './Components/Carta';
import Header from './Components/Header/Header';
import CharacterDetails from './Components/Detalle/CharacterDetails';
import Favorito from './Components/Favorito';
import Acercade from './Components/Acercade';

export default function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://dattebayo-api.onrender.com/characters")
      .then(resp => resp.json())
      .then(info => setData(info.characters))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Carta Carta={data} />} />
          <Route path='/detalle/:id' element={<CharacterDetails Carta={data} />} />
          <Route path='/Favorito' element={<Favorito/>} />
          <Route path='/Acercade' element={<Acercade/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}
