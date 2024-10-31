
import "./DetallePage.css";
import CartasPer from './CartasPe/CartasPer';
import { Link } from 'react-router-dom'

const Carta = ({ Carta }) => {
    return (
        <div className='cartas'>
            {Carta.map((element) => {
                return (
                    <div id="cartaun">
                        <Link to={`/detalle/${element.id}`} id='character'>
                            <CartasPer name={element.name} key={element.id} images={element.images} />
                        </Link>
                    </div>
                )
            }
            )}
        </div>
    )
}

export default Carta