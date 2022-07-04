import React, { useContext } from 'react';
import img from './carritovacio.png';
import './Cart.css';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import CartContainer from '../CartContainer/CartContainer';

const Cart = () => {

  const [carrito] = useContext(CartContext);

  return (
    <>
      {carrito.length === 0 ?
        <div className='cart-conteiner'>
          
          <button className='btn-opciones seguir'>
            <Link to='/' className='seguir-link'>Ir a comprar</Link>
          </button>
          <h3>No has seleccionado ningun producto</h3>
          <img className='vacio' src={img} alt='Carro Vacio' />
        </div>
        : <CartContainer />
      }
    </>

  )
}

export default Cart