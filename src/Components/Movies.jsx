import React from 'react';
import '../Styles/Movies.css'
import bannerFive from '../Assets/images/viewers-starwars.png'

const Movies = () => {
    return (
        <div className='movies__main'>
            <h4>Reccommended for You</h4>
            <div className='movies'>
                <div className='movie__content'>
                    <img src={bannerFive} alt="" />
                </div>
                <div className='movie__content'>
                    <img src={bannerFive} alt="" />
                </div>
                <div className='movie__content'>
                    <img src={bannerFive} alt="" />
                </div>
                <div className='movie__content'>
                    <img src={bannerFive} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Movies;
