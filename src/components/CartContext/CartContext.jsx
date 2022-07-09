import { createContext, useState, useEffect } from 'react';
import { db } from '../../firebase/FirebaseConfig';
import { collection, query, getDocs } from 'firebase/firestore';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [product, setProduct] = useState([]);

    const addItem = (data , cant) => {
        if (isInCart(data.id)) {
            const x = carrito.find((e)=>e.id === data.id)
            x.cant += cant
            setCarrito([...carrito])
        } else {
            setCarrito([...carrito, {...data, cant}])
        }
    }
   
    const clear = () => (setCarrito([]));

    const quantity = () => {
        return carrito.reduce((acc, el) => acc + el.cant, 0)
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(product => product.id !== id));
    }

    const totalCompra =()=> {
        return carrito.reduce((acc, el) => acc + el.precio * el.cant, 0)
    }

    const isInCart = (id) => carrito.some(i => i.id === id);
    
    const getItems = async () => {
        const q = query(collection(db, 'Items'));
        const querySnapshot = await getDocs(q)
        const docs = [];
        querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id});
        });
        setProduct(docs);
    }

    useEffect(() => {getItems()},[])
    return (
        <CartContext.Provider value={
            {carrito, product, setProduct, setCarrito, addItem, clear, quantity, removeItem, totalCompra}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;