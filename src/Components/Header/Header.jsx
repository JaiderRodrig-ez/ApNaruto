import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div id='contenedor'>
      <div id='contenedor2'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/800px-Naruto_logo.svg.png" alt="" />
      </div>
      <div id='botons'>
        <div id='botons2'>
        <Link to="/" id='Home'><button className='butt'>Home</button></Link>
        <Link to="/Favorito" id='Favorito'><button className='butt'>Favoritos</button></Link>
        <Link to="/Acercade" id='Acercade'><button className='butt'>Acerca de</button></Link>
        </div>
      </div>
    </div>
  )

}
