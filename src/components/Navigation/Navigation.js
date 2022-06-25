import './Navigation.css';
import { Link } from 'react-router-dom';
import BsFillCartFill from '../CartWidget/CartWidget';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import logo from './logoB.png';
import { ImHome, ImUsers, ImExit } from "react-icons/im";

import SplitBasicExample from './Category';

const Navigation = () => {
    return(
        <header>
            <div className='title'>
                <Link to='/'><img className='logoTipo' src={logo} alt='logo'/></Link>
                <h1>Ambientar</h1>
            </div>
            <form>
                <TextField placeholder='Buscar Producto' variant='outlined' className='filtro'/>
                <button className='btn-container'><SearchIcon className='btn-lupa'/></button>
            </form>
            <nav>
                <ul>
                    <Link to='/' className='li'><ImHome/></Link>
                    <Link to='/category/:id' className='li'><ImExit/></Link>
                    <Link to='/Contact' className='li'><ImUsers/></Link>
                    <span className='carrito'><BsFillCartFill/></span>
                </ul>
            </nav>
            <SplitBasicExample/>
        </header>
    )
};

export default Navigation;