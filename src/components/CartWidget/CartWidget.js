import React from 'react'
import './CartWidget.css'
import { BsFillCartFill } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {
  const [carrito, setCarrito, addItem, clear,quantity] = useContext(CartContext);

  return (
    <div className='container-widget'>
        <p><BsFillCartFill/></p>
        <p className='cantidad'>{quantity()}</p>
    </div>
  )
}

export default CartWidget;