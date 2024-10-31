import { useParams } from 'react-router-dom';
import "./segunda.css";
import CartasPer2 from './CartasPer2';

const CharacterDetails = ({ Carta }) => {
  const { id } = useParams(); 
  const character = Carta.find(item => item.id.toString() === id); 

  if (!character) {
    return <div>Cargando...</div>; 
  }

  return (
    <div className='cartas2'>
      <CartasPer2 
      id={character.id} 
        name={character.name} 
        images={character.images} 
        jutsu={character.jutsu} 
        father={character.natureType} 
        birthdate={character.personal.birthdate} 
        sex={character.personal.sex} 
        bloodType={character.personal.bloodType}
        kekkeiGenkai={character.personal.kekkeiGenkai}
        classification={character.personal.classification}
      />
    </div>
  );
}

export default CharacterDetails;


