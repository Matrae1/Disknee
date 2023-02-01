import React from 'react';
import '../Styles/Header.css'
import logo from '../Assets/images/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import pp from '../Assets/images/pp.jpeg'



const Header = () => {
    return (
        <div className='header__nav'>
            <img className='logo' src={logo} alt="" />

            <div className="nav__menu">
               <a className='nav__option'>
               <HomeIcon className='nav__icon'/>
               <p>HOME</p>
               </a>
               <a className='nav__option'>
               <HomeIcon className='nav__icon'/>
               <p>SEARCH</p>
               </a>
               <a className='nav__option'>
               <HomeIcon className='nav__icon'/>
               <p>WATCHLIST</p>
               </a>
               <a className='nav__option'>
               <HomeIcon className='nav__icon'/>
               <p>ORIGINALS</p>
               </a>
               <a className='nav__option'>
               <HomeIcon className='nav__icon'/>
               <p>MOVIES</p>
               </a>
               <a className='nav__option'>
               <HomeIcon className='nav__icon'/>
               <p>SERIES</p>
               </a>
            </div>
            <div className="user__img">
                <img src={pp} alt="" />
            </div>
        </div>
    );
}

export default Header;

