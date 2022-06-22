import React from 'react'
import { items } from '../Items/Items'

const ItemDetail = () => {
  return (
    <div>
        <h1>Detalles del Producto</h1>
        <h2>Producto: {items[1].producto}</h2>
        <img src={items[1].img} alt={items.id}/>
        <h3>Precio: {items[1].precio}</h3>
    </div>
  )
}

export default ItemDetail