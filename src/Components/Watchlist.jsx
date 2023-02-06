import React from 'react';
import { films } from '../data'
import Media from '../UI/Media';

const Watchlist = () => {
    return (
        <div className='movies__main'>
            <h4>Films in your watchlist</h4>
            <div className='movies'>
                {
                films.filter((film) => film.category === 'Pixar').slice(0,1)
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
    );
}

export default Watchlist;
