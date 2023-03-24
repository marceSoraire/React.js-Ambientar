import { useState, useEffect } from 'react';
import './ElemenDetail.css';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Spiner/Spiner';
import CardComponents from '../../components/CardComponents/CardComponents';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/FirebaseConfig';
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';

const ElemenDetail = () => {

    const [load, setLoad] = useState(false);
    const [producto, setProducto] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setLoad(true);

        const getItems = async () => {
            const q = query(collection(db, 'Items'), where(documentId(), '==', id));
            const querySnapshot = await getDocs(q)
            const docs = [];
    
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducto(docs);
        }
        getItems()

        setTimeout(() => setLoad(false), 1000)

    }, [id])

    return (
        <div className='element-conteiner'>
            {load ? (
                <div><Loading /></div>
            ) : (
                producto.map((data) => {
                    return (
                        <div className='element-date' key={data.id}>
                            <div>
                                <CardComponents data={data} />
                            </div>
                            <div className='itemCount-count'>
                                <ItemDetail data={data}/>
                            </div>
                        </div>
                    )
                })
            )}
        </div >
    )
}

export default ElemenDetail;