import React from 'react';
import bannerFive from '../Assets/images/viewers-starwars.png'

const Media = ({ film }) => {
    return (
        <div className='movie__content'>
        <img src={film.image} alt="" />
    </div>
    );
}

export default Media;
