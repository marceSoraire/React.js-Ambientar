import { useEffect, useState } from "react";
import { items } from "../Items/Items";

import './Navigation.css';
import { Link } from 'react-router-dom';
import BsFillCartFill from '../CartWidget/CartWidget';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import logo from './logoB.png';
import { ImHome, ImUsers, ImExit } from "react-icons/im";

const Navigation = () => {

    const [productos, setProductos] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState();

    useEffect(() => {
        setProductos(items);
    }, []);

    function handleCategoryChange(event) {
        if (selectedCategory === undefined) {
            return productos;
        } else {
        setSelectedCategory(event.target.value);
        
        } 
        // Este console.log me devuelve el valor del Value seleccionado
        console.log(event.target.value)
    }

    return (
        <header>
            <div className='title'>
                <Link to='/'><img className='logoTipo' src={logo} alt='logo' /></Link>
                <h1>Ambientar</h1>
            </div>
            <form>
                <TextField placeholder='Buscar Producto' variant='outlined' className='filtro' />
                <button className='btn-container'><SearchIcon className='btn-lupa' /></button>
            </form>
            <nav>
                <ul>
                    <Link to='/' className='li'><ImHome /></Link>

                    {/* Dejo harckodeado el valor Celular para filtrar el producto, lo que no puedo es
                    darle un valor dianmico para que segun lo que elija pueda ir modificandose
                    te envio asi para que me guies en esto, intente con el drowpdown pero me rompe el codigo */}

                    <Link to='/category/Celular' className='li'><ImExit /></Link>
                    <select
                        className="category-list"
                        name="category-list"
                        id="category-list"
                        onChange={handleCategoryChange}
                    >
                    {/* Los valores de estas opciones son las que me gustaria enviar para lograr hacer eel filtrado,
                    entiendo que mi error esta en que esta section es algo independiente a Link=to y es por ese motivo 
                    que no logro conectarlos, quizas si se puede y no me sale a mi, es aca donde necesito una guia */}
                    
                        <option value='Celular'>Celular</option>
                        <option value='Consola'>Consola</option>
                        <option value="Gabinete">Gabinete</option>
                    </select>
                    <Link to='/Contact' className='li'><ImUsers /></Link>
                    <span className='carrito'><BsFillCartFill /></span>
                </ul>
            </nav>
        </header>
    )
};

export default Navigation;