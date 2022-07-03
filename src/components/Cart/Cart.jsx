import React, { useContext } from 'react';
import img from './carritovacio.png';
import './Cart.css';
import { CartContext } from '../CartContext/CartContext';
import CartContainer from '../CartContainer/CartContainer';

const Cart = () => {

  const [carrito] = useContext(CartContext);

  return (
    <>
      {carrito.length === 0 ?
        <div className='cart-conteiner'>
          <h3>Carrito Vacio</h3>
          <img className='vacio' src={img} alt='Carro Vacio' />
        </div>
        : <CartContainer/>
      }
    </>

  )
}

export default Cart