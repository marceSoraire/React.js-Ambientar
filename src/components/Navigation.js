import './Navigation.css';
import logo from './logoA.jpg';

const Navigation = () => {
    return(
        <header>
            <div className='title'>
                <img src={logo} alt='logo'/>
                <h1>Ambientar</h1>
            </div>
            <nav>
                <ul>
                    <li><a>Home</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>Electrodomesticos</a></li>
                    <li><a>Muebles</a></li>
                    <li><a>Moviles</a></li>
                </ul>
            </nav>
        </header>
    )
};

export default Navigation;