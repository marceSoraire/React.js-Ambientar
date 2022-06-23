import React from 'react';
import './ItemListContainer.css'
import CardComponents from '../CardComponents/CardComponents';
import { items } from '../Items/Items';
import { Link } from 'react-router-dom';

const ItemListContainer = () => {
    return (
        <div className='itemListContainer-Container'>
            {items.map((e) => {
                return (
                    <div key={e.id}>
                        <Link to={`detail/${e.id}`} className='div-card'>
                            <CardComponents data={e}/>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}

export default ItemListContainer;