import React, { useState, useEffect } from 'react';
import '../Styles/Movies.css'
import Media from '../UI/Media'
import { films } from '../data'


const Movies = () => {
    console.log(films)
  
    return (
        <div className='movies__main'>
            <h4>Reccommended for You</h4>
            <div className='movies'>
                {
                films.filter((film) => film.recommended === true).slice(0, 8)
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
    );
}

export default Movies;
