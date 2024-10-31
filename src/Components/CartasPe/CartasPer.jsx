import React from 'react'
import "./CartsPer.css";

const CartasPer = ({ name, images }) => {
  return (
    <div>
      <div id='contor' sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <div id='imgae'>
            <img src={images[0]} alt="" />
        </div>
        <div id='info'>
            {name}
        </div>
      </div>
    </div>
  )
}

export default CartasPer
