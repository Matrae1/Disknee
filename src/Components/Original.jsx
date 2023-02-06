import React from 'react';
import { films } from '../data'
import Media from '../UI/Media';

const Original = () => {
    
        return (
            <div className='movies__main'>
                <h4>Originals</h4>
                <div className='movies'>
                    {
                    films.filter((film) => film.original === true)
                    .map((film) => ( 
                    <Media film={film} key={film.id}/>
                    ))}
                </div>
            </div>
        
        );
}

export default Original;
