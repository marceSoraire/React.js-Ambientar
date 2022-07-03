import { createContext, useState } from 'react';
import { items } from '../Items/Items'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    // const [precioFinal, setPrecioFinal] = useState(0);
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
        // let price = carrito.reduce((acc, el) => acc + el.precio, 0)
        let acum = carrito.reduce((acc, el) => acc + el.cant, 0)
        // let total = acum * price;
        // totalCompra(total);
        return acum;
    }

    const removeItem = (id) => {
        setCarrito(carrito.filter(item => item.id !== id));
    }

    // const totalCompra =(total)=> {
    //     setPrecioFinal(total + precioFinal);
    //     console.log(`gastos total ${precioFinal}`)
    // }
    const isInCart = (id) => carrito.some(i => i.id === id);

    return (
        <CartContext.Provider value={
            [carrito, setCarrito, addItem, clear, quantity, removeItem]}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;