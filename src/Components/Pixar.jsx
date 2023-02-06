import React from 'react';
import { films } from '../data'
import Media from '../UI/Media';

const Pixar = () => {
    return (
        <div className='movies__main'>
            <h4>Pixar Films</h4>
            <div className='movies'>
                {
                films.filter((film) => film.category === 'Pixar')
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
    );
}

export default Pixar;
