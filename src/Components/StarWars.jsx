import React from 'react';
import { Link } from 'react-router-dom';
import { films } from '../data'
import Media from '../UI/Media';

const StarWars = () => {
    return (
        <div className='movies__main'>
           <div className="text">
                <h4>Star Wars</h4>
                <Link to="/">
                <button className='back__button'>Back</button>
                </Link>
                </div>
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