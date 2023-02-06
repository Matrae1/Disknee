import React from 'react';
import { films } from '../data'
import Media from '../UI/Media';

const NationalGeo = () => {
    return (
        <div className='movies__main'>
            <h4>National Geographic</h4>
            <div className='movies'>
                {
                films.filter((film) => film.category === 'NationalGeo')
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
    );
}

export default NationalGeo;
