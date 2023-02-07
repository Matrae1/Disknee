import React from 'react';
import { films } from '../data'
import Media from '../UI/Media';
import { RemoveScrollBar } from 'react-remove-scroll-bar';

const All = () => {
    return (
        <div className='movies__main'>
            <h4>All</h4>
            <div className='movies'>
                {
                films.filter((film) => film)
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
        
    );
}

export default All;
