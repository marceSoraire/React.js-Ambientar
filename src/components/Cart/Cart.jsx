import React from 'react';
import img from './carritovacio.png';
import './Cart.css';

const Cart = () => {
  return (
    <div className='carro-vacio'>
        <h3>Carrito Vacio</h3>
        <img className='vacio' src={img} alt='Carro Vacio'/>
    </div>
  )
}

export default Cart