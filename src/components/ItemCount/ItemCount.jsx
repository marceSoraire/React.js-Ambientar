import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock, min }) => {

  const [counter, setCounter] = useState(0);

  const suma = () => counter < stock ? setCounter(counter + 1) : console.log('no quedan mas unidades');
  const resta = () => counter > min ? setCounter(counter - 1) : console.log('El producto esta vacio');

  return (
    <section className="itemCount">
      <div className="itemCount-count">
        <button className="btn-suma-resta" onClick={suma}>Agregar</button>
        <span>{counter}</span>
        <button className="btn-suma-resta" onClick={resta}>Quitar</button>
      </div>
      {/* <div className='item-details'>
      <button className="btn-suma-resta" onClick={resta}>Detalles</button>
      </div> */}
    </section>
  )
}

export default ItemCount;