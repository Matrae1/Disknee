import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Movies.css'


const Media = ({ film }) => {
    return (
        
        <div className='movie__content'>
            <Link to={`/details/${film.id}`} className='filmLink' >
        <img src={film.image} alt="" />
            </Link>

    </div>
    );
}

export default Media;
