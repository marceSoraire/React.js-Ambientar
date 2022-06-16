import React from 'react';
import './ItemListContainer.css'
import CardComponents from '../CardComponents/CardComponents';
import { items } from '../Items/Items';


const ItemListContainer = () => {
    return (
        <div className='itemListContainer-Container'>
            {items.map((e) => <CardComponents data = {e}/>)}
        </div>
    )
}

export default ItemListContainer;