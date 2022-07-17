import { useContext } from 'react';
import './CartContainer.css'
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';
import DeleteForever from '@mui/icons-material/DeleteForever';

const CartContainer = () => {

    const { carrito, clear, removeItem, totalCompra } = useContext(CartContext);

    return (
        <div className='container'>
            {carrito.map((e) => (
                <div className='finalizar' key={e.id}>
                    <div className='div-img'>
                        <img src={e.img} className='img-carrito' alt='img' />
                    </div>
                    <div className='div-res'>
                        <h2>{e.modelo}</h2>
                        <h5>Unidades: {e.cant}</h5>
                        <h5>Precio C/U: $ {e.precio}</h5>
                        <h5>Fabricado: {e.fabricado}</h5>
                    </div>
                    <button onClick={() => removeItem(e.id)} className='btn-carrito'><DeleteForever /></button>
                </div>
            ))
            }
            <h3 className='precioFinal'>Precio Final: ${totalCompra()}</h3>
            <div>
                <button onClick={() => clear()} className='btn-opciones vaciar'>
                    Vaciar carrito
                </button>
                <button className='btn-opciones seguir'>
                    <Link to='/' className='seguir-link'>Seguir comprando</Link>
                </button>
                <button className='btn-opciones comprar'>
                    <Link to='/FinalPurchase' className='seguir-link'>
                        Finalizar Compra
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default CartContainer