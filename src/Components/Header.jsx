import React from 'react';
import '../Styles/Header.css'
import logo from '../Assets/images/logo.svg'
import HomeIcon from '@mui/icons-material/Home';
import pp from '../Assets/images/pp.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header__nav'>
            <img className='logo' src={logo} alt="" />
            

            <div className="nav__menu">
               <a className='nav__option'>
               <HomeIcon className='nav__icon'/>
               <Link to="/" className='nav__option'>
               <p>HOME</p>
               </Link>
               </a>
               <a className='nav__option'>
               <SearchIcon className='nav__icon'/>
               <Link to="/search" className='nav__option'>
               <p>SEARCH</p>
               </Link>
               </a>
               <a className='nav__option'>
               <AddIcon className='nav__icon'/>
               <Link to="/watchlist"  className='nav__option' >
               <p>WATCHLIST</p>
               </Link>
               </a>
               <a className='nav__option'>
               <StarIcon className='nav__icon'/>
               <Link to="/originals"  className='nav__option'>
               <p>ORIGINALS</p>
               </Link>
               </a>
               <a className='nav__option'>
               <GroupWorkIcon className='nav__icon'/>
               <Link to="/all"  className='nav__option'>
               <p>MOVIES</p>
               </Link>
               </a>
               <a className='nav__option'>
               <LiveTvIcon className='nav__icon'/>
               <Link to="/series"  className='nav__option'>
               <p>SERIES</p>
               </Link>
               </a>
            </div>
            <div className="user__img">
                <img src={pp} alt="" />
            </div>
        </div>
    );
}

export default Header;

