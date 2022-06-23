import './Navigation.css';
import { Link } from 'react-router-dom';
import BsFillCartFill from '../CartWidget/CartWidget';
import logo from './logoB.png';
import { ImHome, ImUsers, ImExit } from "react-icons/im";

const Navigation = () => {
    return(
        <header>
            <div className='title'>
                <img className='logoTipo' src={logo} alt='logo'/>
                <h1>Ambientar</h1>
            </div>
            <nav>
                <ul>
                    <Link to='/' className='li'><ImHome/> Home</Link>
                    <Link to='/Product' className='li'><ImExit/> Product</Link>
                    <Link to='/Contact' className='li'><ImUsers/> Contact</Link>
                    <span className='carrito'><BsFillCartFill/></span>
                </ul>
            </nav>
        </header>
    )
};

export default Navigation;