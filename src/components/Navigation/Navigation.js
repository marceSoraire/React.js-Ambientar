import './Navigation.css';
import logo from './logoA.jpg';
import { ImHome, ImUsers } from "react-icons/im";

const Navigation = () => {
    return(
        <header>
            <div className='title'>
                <img className='logoTipo' src={logo} alt='logo'/>
                <h1>Ambientar</h1>
            </div>
            <nav>
                <ul>
                    <li><ImHome/><a> Home</a></li>
                    <li><ImUsers/><a> Nosotros</a></li>
                    <li><a>Electro</a></li>
                    <li><a>Muebles</a></li>
                    <li><a>Moviles</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navigation;