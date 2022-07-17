import { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import BsFillCartFill from '../CartWidget/CartWidget';
import logo from './logoB.png';
import { ImHome, ImUsers, ImMenu } from "react-icons/im";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Navigation = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <header>
            <div className='title'>
                <Link to='/'><img className='logoTipo' src={logo} alt='logo' /></Link>
                <h1 className='title-header'>Ambientar</h1>
            </div>
            <nav>
                <ul>
                    <Link to='/' className='li'><ImHome /></Link>
                    <Link to='/Contact' className='li'><ImUsers /></Link>
                    <IconButton onClick={handleMenu}>
                        <ImMenu className='category-list'/>
                    </IconButton>
                    <Link to='/Cart' className='carrito'><BsFillCartFill /></Link>
                </ul>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to='/categoria/Celular' className='ruter-li'>Celular</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/categoria/Consola' className='ruter-li'>Consola</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/categoria/Electro' className='ruter-li'>Electro</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/categoria/Gabinete' className='ruter-li'>Gabinete</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/categoria/Televisor' className='ruter-li'>Televisor</Link>
                    </MenuItem>
                </Menu>
            </nav>
        </header>
    )
};

export default Navigation;