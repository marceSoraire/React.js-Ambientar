import { useContext, useState } from 'react';
import './FinalPurchase.css';
import { CartContext } from '../../components/CartContext/CartContext';
import { TextField } from '@mui/material';
import { db } from '../../firebase/FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

const initial = {
    name: '',
    email: '',
    tel: '',
    dir: '',
};

const FinalPurchase = () => {

    const { carrito, clear, totalCompra } = useContext(CartContext);
    const [values, setValues] = useState(initial);
    const [purchaseId, setPurchaseId] = useState('');
    const fecha = new Date();

    const handleOnChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value })
    }

    const orden = () => {
        const items = [];
        carrito.forEach((item) => items.push({ id: item.id, title: item.modelo, }))
        return items;
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const items = orden();
        const total = totalCompra();
        const docRef = await addDoc(collection(db, 'purchases'), { values, items, fecha, total });
        setPurchaseId(docRef.id);

        setTimeout(() => {
            setPurchaseId('')
            setValues(initial)
            clear()
        }, 20000);
    };

    return (
        <div>
            {purchaseId === '' ? (
                <>
                    <form className='form' onSubmit={onSubmit}>
                        <h3>Ingrese sus datos</h3>
                        <TextField
                            placeholder='Name'
                            style={{ margin: 10, width: 400 }}
                            name='name'
                            value={values.name}
                            onChange={handleOnChange}
                        />
                        <TextField
                            placeholder='Email'
                            style={{ margin: 10, width: 400 }}
                            name='email'
                            value={values.email}
                            onChange={handleOnChange}
                        />
                        <TextField
                            placeholder='Telefono'
                            style={{ margin: 10, width: 400 }}
                            name='tel'
                            value={values.tel}
                            onChange={handleOnChange}
                        />
                        <TextField
                            placeholder='Direccion'
                            style={{ margin: 10, width: 400 }}
                            name='dir'
                            value={values.dir}
                            onChange={handleOnChange}
                        />
                        <button className='btnEnd'>Confirmar Compra</button>
                    </form>
                </>

            ) : (
                <div className='terminar'>
                    <article>
                        {`El/La señor/a ${values.name.toLocaleUpperCase()} realizo el dia 
                        ${fecha.getDate()}/${fecha.getMonth() + 1}/${fecha.getFullYear()}
                        de manera satisfactoria, en la tienda online de "AMBIENTAR", la compra de: `}
                    </article>
                    {carrito.map((e) => {
                        return (
                            <table key={e.id} className='table-compra'>
                                <th>#</th>
                                <th>{e.cant}</th>
                                <th>{e.categoria}</th>
                                <th>{e.modelo}</th>
                            </table>
                        )
                    })
                    }
                    <article>
                        {`Listos para ser entregados dentro de las proximas 72hs habiles al domicilio
                        ${values.dir.toLocaleUpperCase()}. Numero de contacto ${values.tel}`}
                    </article>
                    <h2 className='h2-ticket'>Total de la compra: ${totalCompra()}</h2>
                    <h2 className='h2-ID'>ID compra: {purchaseId}</h2>
                </div>
            )}
        </div>
    )
}

export default FinalPurchase