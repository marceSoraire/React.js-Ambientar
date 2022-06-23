import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../../components/Items/Items';
import './ElemenDetail.css';
import ItemCount from '../../components/ItemCount/ItemCount';
import Loading from '../../components/Spiner/Spiner';
import CardComponents from '../../components/CardComponents/CardComponents';

const ElemenDetail = () => {
    const [load, setLoad] = useState(false);
    const [element, setElement] = useState([])
    let { id } = useParams();

    useEffect(() => {
        items.forEach(i => i.id == id ? setElement(i) : null)
    })

    useEffect(() => {
        setLoad(true);

        setTimeout(() => {

            setLoad(false);
        }, 1000)

    }, [])

    return (
        <div className='element-conteiner'>
            <div key={element.id} className='element-date'>
                {load ? <Loading /> : <CardComponents data={element} />}
            </div>
            <div className="itemCount-count">
                {load ? <Loading /> : <ItemCount data={element} />}
            </div>
        </div >
    )
}

export default ElemenDetail;