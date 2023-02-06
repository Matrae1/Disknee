import React from 'react';
import { films } from '../data'
import Media from '../UI/Media';

const StarWars = () => {
    return (
        <div className='movies__main'>
            <h4>Star Wars</h4>
            <div className='movies'>
                {
                films.filter((film) => film.category === 'StarWars')
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
    );
}

export default StarWars;