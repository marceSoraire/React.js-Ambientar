import { useEffect, useState } from 'react';
import './ItemListContainer.css'
import CardComponents from '../CardComponents/CardComponents';
import { Link } from 'react-router-dom';
import Loading from '../Spiner/Spiner';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const ItemListContainer = () => {

    const [load, setLoad] = useState(false);
    const { product } = useContext(CartContext);

    useEffect(() => {
        setLoad(true)
        setTimeout(() => setLoad(false), 1500);
    }, [])

    return (
        <>
            {load ? (
                <Loading />
            ) : (
                <div className='itemListContainer-Container'>
                    {product.map((data) => {
                        return (
                            <div key={data.id}>
                                <Link to={`detail/${data.id}`} className='div-card'>
                                    <CardComponents data={data} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    )
}

export default ItemListContainer;