import React from 'react';
import { films } from '../data'
import Media from '../UI/Media';

const DisneyMovies = () => {

    return (
        <div className='movies__main'>
            <h4>Classic Disney Films</h4>
            <div className='movies'>
                
                {
                films.filter((film) => film.category === 'Disney')
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
    );
}

export default DisneyMovies;
