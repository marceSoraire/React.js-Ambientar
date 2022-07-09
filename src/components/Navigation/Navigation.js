import { useContext } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import BsFillCartFill from '../CartWidget/CartWidget';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import logo from './logoB.png';
import { ImHome, ImUsers} from "react-icons/im";
import { CartContext } from '../CartContext/CartContext';

const Navigation = () => {
    const {carrito } = useContext(CartContext);

    return (
        <header>
            <div className='title'>
                <Link to='/'><img className='logoTipo' src={logo} alt='logo' /></Link>
                <h1>Ambientar</h1>
            </div>
            <form>
                <TextField 
                placeholder='Buscar Producto' variant='outlined' className='filtro' />
                <button className='btn-container'><SearchIcon className='btn-lupa' /></button>
                <div className="ruter">
                    <Link to='/categoria/Celular' className='ruter-li'>Celular</Link>
                    <Link to='/categoria/Consola' className='ruter-li'>Consola</Link>
                    <Link to='/categoria/Electro' className='ruter-li'>Electro</Link>
                    <Link to='/categoria/Gabinete' className='ruter-li'>Gabinete</Link>
                    <Link to='/categoria/Televisor' className='ruter-li'>Televisor</Link>

                </div>
            </form>
            <nav>
                <ul>
                    <Link to='/' className='li'><ImHome /></Link>
                    <Link to='/Contact' className='li'><ImUsers /></Link>
                    {carrito.length === 0 ? null 
                    : <Link to='/Cart' className='carrito'><BsFillCartFill/></Link>
                    }
                </ul>
            </nav>
        </header>
    )
};

export default Navigation;