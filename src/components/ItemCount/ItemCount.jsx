import { useState } from 'react';
import './ItemCount.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ItemCount = ({ data, onAdd }) => {
  const min = 1;
  const [cant, setCant] = useState(min);
  const [check, setCheck] = useState(false);

  const suma = () => {
    if (cant < data.stock) {
      setCant(cant + 1)
    } else {
      Swal.fire(
        'No puedes seguir Agregando',
        'Limite de Stock disponible alcanzado',
        'info'
      );
    }
  }
  const resta = () => {
    if (cant > min) {
      setCant(cant - 1)
    } else {
      Swal.fire(
        'No puedes comprar 0 productos!',
        'error'
      );;
    }
  }
  const checkOut = () => {
    Swal.fire({
      title: `Agregar ${cant} ${data.modelo} al carrito?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Agregar',
      denyButtonText: `No agregar`,
    }).then((result) => {
      if (result.isConfirmed) {
        onAdd(cant);
        setCheck(true);
        Swal.fire(`Añadiste ${cant} ${data.modelo} al carrito`, '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se pudo añadir al carrito', '', 'info')
      }
    })

  }
  return (
    <section className='bt-itemCount'>
      <div>
        <button className="btn-suma-resta" onClick={suma}>+</button>
        <span>{cant}</span>
        <button className="btn-suma-resta" onClick={resta}>-</button>
      </div>
      <div className='add'>
        <button className="btn-compra" onClick={checkOut}>
          Agregar al Carrito
        </button>
        {check &&
          <div className='check'>
            <Link to='/'>
              <button className="btn-check">
                Seguir Comprando
              </button>
            </Link>
            <Link to='/Cart'>
              <button className="btn-check">
                ir al Carrito
              </button>
            </Link>
          </div>
        }
      </div>
    </section>
  )
}

export default ItemCount;