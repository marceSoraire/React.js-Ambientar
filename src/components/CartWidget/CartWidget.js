import { useContext } from 'react';
import './CartWidget.css'
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from '../CartContext/CartContext';

const CartWidget = () => {
  const { quantity } = useContext(CartContext);

  return (
    <div className='container-widget'>
        <p><BsFillCartFill/></p>
        <p className='cantidad'>{quantity()}</p>
    </div>
  )
}

export default CartWidget;