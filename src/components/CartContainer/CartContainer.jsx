import React from 'react'
import './CartContainer.css'
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import DeleteForever from '@mui/icons-material/DeleteForever';

const CartContainer = () => {
    const [carrito, setCarrito, addItem, clear, quantity, removeItem] = useContext(CartContext);

    return (
        <div className='container'>
            {carrito.map((e) => (
                <div className='finalizar' key={e.id}>
                    <div className='div-img'>
                        <img src={e.img} className='img-carrito' />
                    </div>
                    <div className='div-res'>
                        <h2>{e.modelo}</h2>
                        <h5>Unidades: {e.cant}</h5>
                        <h5>Precio: {e.precio}</h5>
                        <h5>Total: {e.stock}</h5>
                    </div>
                    <button onClick={()=>removeItem(e.id)} className='btn-carrito'><DeleteForever /></button>
                </div>
            ))
            }
            <div>
                <button className='btn-opciones seguir'>
                    <Link to='/' className='seguir-link'>Seguir comprando</Link> 
                </button>
                <button onClick={()=>clear()} className='btn-opciones vaciar'>
                    Vaciar carrito
                </button>
                <button className='btn-opciones comprar'>
                    Finalizar Compra
                </button>
            </div>
        </div>
    )
}

export default CartContainer