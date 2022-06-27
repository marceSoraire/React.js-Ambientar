import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import CardComponents from '../CardComponents/CardComponents';
import { getProductos, getProductosFiltrado } from '../Items/Items';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [elementos, setElementos] = useState([])
    let {categoryId} = useParams();

    useEffect(()=> {
        if (categoryId === undefined) {
            setElementos(getProductos())
        } else {
            setElementos(getProductosFiltrado(categoryId))
        }
       
    }, [categoryId])

    return (
        <div className='itemListContainer-Container'>
            {elementos.map((e) => {
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