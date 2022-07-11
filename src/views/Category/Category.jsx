import { useState, useEffect } from 'react';
import '../ElemenDetail/ElemenDetail.css';
import Loading from '../../components/Spiner/Spiner';
import CardComponents from '../../components/CardComponents/CardComponents';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../firebase/FirebaseConfig';
import { collection, query, getDocs, where } from 'firebase/firestore';

const Category = () => {

    const [load, setLoad] = useState(false);
    const [producto, setProducto] = useState([]);
    const { categoria } = useParams();

    useEffect(() => {
        setLoad(true);

        const getItems = async () => {
            const q = query(collection(db, 'Items'), where('categoria', '==', categoria));
            const querySnapshot = await getDocs(q)
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setProducto(docs);
        }
        getItems()

        setTimeout(() => setLoad(false), 1000)

    }, [categoria])

    return (
        <div className='element-conteiner'>
            {load ? (
                <Loading />
            ) : (
                producto.map((data) => {
                    return (
                        <div key={data.id}>
                            <Link to={`detail/${data.id}`} className='div-card'>
                                <CardComponents data={data} />
                            </Link>
                        </div>
                    )
                })
            )}
        </div >
    )
}

export default Category;