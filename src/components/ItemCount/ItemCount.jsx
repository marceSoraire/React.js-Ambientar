import { useState} from 'react';
import './ItemCount.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ItemCount = ({ data, onAdd }) => {
  const min = 1;
  const [counter, setCounter] = useState(min);

  const suma = () => {
    if (counter < data.stock) {
      setCounter(counter + 1)
    }else {
      Swal.fire(
        'No puedes seguir Agregando',
        'Limite de Stock disponible alcanzado',
        'info'
        );
    }
  }
  const resta = () => {
    if (counter > min) { 
      setCounter(counter - 1)
    } else { 
      Swal.fire(
        'No puedes comprar 0 productos!',
        'Desesas volver al menu?',
        'error'
        );;
    }
  }
  const compra = () => {
    let final = counter * data.precio;
    onAdd(final);

  }
  return (
    <section className='bt-itemCount'>
      <div>
        <button className="btn-suma-resta" onClick={suma}>+</button>
        <span>{counter}</span>
        <button className="btn-suma-resta" onClick={resta}>-</button>
      </div>
      <div className='add'>
        <Link to='/Cart'>
          <button className="btn-compra" onClick={compra}>Agregar al Carrito</button> 
        </Link>
      </div>
    </section>
  )
}

export default ItemCount;