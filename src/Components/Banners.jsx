import React from 'react';
import '../Styles/Banners.css'
import bannerOne from '../Assets/images/viewers-disney.png'
import bannerTwo from '../Assets/images/viewers-marvel.png'
import bannerThree from '../Assets/images/viewers-national.png'
import bannerFour from '../Assets/images/viewers-pixar.png'
import bannerFive from '../Assets/images/viewers-starwars.png'
import { Link} from 'react-router-dom';

const Banners = () => {
    return (
        <div className='banner__main'>
            <div className='banner__wrapper'>
                <Link to="/disney" className='bannerLink'>
            <img src={bannerOne} alt="" />
            </Link>
            </div>
            <div className='banner__wrapper'>
                <Link to="marvel" className='bannerLink'>
            <img src={bannerTwo} alt="" />
            </Link>
            </div>
            <div className='banner__wrapper'>
            <Link to="nationalgeo" className='bannerLink'>
            <img src={bannerThree} alt="" />
            </Link>
            </div>
            <div className='banner__wrapper'>
            <Link to="pixar" className='bannerLink'>
            <img src={bannerFour} alt="" />
            </Link>
            </div>
            <div className='banner__wrapper'>
            <Link to="starwars" className='bannerLink'>
            <img src={bannerFive} alt="" />
            </Link>
            </div>
           
        </div>
    );
}

export default Banners;

