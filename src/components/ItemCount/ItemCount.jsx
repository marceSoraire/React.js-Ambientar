import { useState} from 'react';
import './ItemCount.css';
import CardDetail from '../CardDetail/CardDetail';
import Swal from 'sweetalert2';

const ItemCount = ({ data }) => {

  const [counter, setCounter] = useState(0);

  const min = 1;
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
    Swal.fire({
      title: `Confirma la compra de 
              ${data.modelo} por $${final}`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Compra exitosa!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Compra invalida', '', 'info')
      }
    })
  }
  return (
    <section>
      <div>
        <CardDetail data={data} />
        <button className="btn-suma-resta" onClick={suma}>+</button>
        <span>{counter}</span>
        <button className="btn-suma-resta" onClick={resta}>-</button>
      </div>
      <div>
        <button className="btn-compra" onClick={compra}>Comprar</button>
      </div>
    </section>
  )
}

export default ItemCount;