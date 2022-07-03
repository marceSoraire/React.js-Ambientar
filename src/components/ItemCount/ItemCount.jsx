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
    Swal.fire({
      title: `Agregar ${counter} ${data.modelo} al carrito?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `No agregar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire(`Añadiste ${counter} ${data.modelo} al carrito`, '', 'success')
        onAdd( counter );
      } else if (result.isDenied) {
        Swal.fire('No se pudo añadir al carrito', '', 'info')
      }
    })
    
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