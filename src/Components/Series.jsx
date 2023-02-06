import React from 'react';
import { films } from '../data'
import Media from '../UI/Media';

const Series = () => {
    return (
        <div className='movies__main'>
            <h4>Series</h4>
            <div className='movies'>
                {
                films.filter((film) => film.series === true )
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
    );
}

export default Series;