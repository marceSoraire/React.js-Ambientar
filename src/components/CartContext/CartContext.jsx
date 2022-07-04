import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    function addItem(data, cant) {
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
        setCarrito(carrito.filter(item => item.id !== id));
    }

    const totalCompra =()=> {
        return carrito.reduce((acc, el) => acc + el.precio * el.cant, 0)

    }
    const isInCart = (id) => carrito.some(i => i.id === id);

    return (
        <CartContext.Provider value={
            [carrito, setCarrito, addItem, clear, quantity, removeItem, totalCompra]}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;