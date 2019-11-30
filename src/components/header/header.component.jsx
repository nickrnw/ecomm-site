import React from 'react';
import { Link } from 'react-router-dom';

/* Logo */
import { ReactComponent as Logo } from '../../assets/shopping-cart.svg';

/* Styles */
import '../header/header.styles.css';

const Header = () => (

    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo> Shop Name
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>
            <Link className='option' to='/contact'>
                Contact
            </Link>
            <Link className='option' to='/login'>
                Sign In
            </Link>
        </div>
    </div>
);

export default Header;