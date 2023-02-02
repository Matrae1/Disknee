import React from 'react';
import '../Styles/Banners.css'
import bannerOne from '../Assets/images/viewers-disney.png'
import bannerTwo from '../Assets/images/viewers-marvel.png'
import bannerThree from '../Assets/images/viewers-national.png'
import bannerFour from '../Assets/images/viewers-pixar.png'
import bannerFive from '../Assets/images/viewers-starwars.png'

const Banners = () => {
    return (
        <div className='banner__main'>
            <div className='banner__wrapper'>
            <img src={bannerOne} alt="" />
            </div>
            <div className='banner__wrapper'>
            <img src={bannerTwo} alt="" />
            </div>
            <div className='banner__wrapper'>
            <img src={bannerThree} alt="" />
            </div>
            <div className='banner__wrapper'>
            <img src={bannerFour} alt="" />
            </div>
            <div className='banner__wrapper'>
            <img src={bannerFive} alt="" />
            </div>
           
        </div>
    );
}

export default Banners;

