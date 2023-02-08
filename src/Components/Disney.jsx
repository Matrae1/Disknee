import React from 'react';
import { Link } from 'react-router-dom';
import { films } from '../data'
import Media from '../UI/Media';

const DisneyMovies = () => {

    return (
        <div className='movies__main'>
             <div className="text">
                <h4>Classic Disney Films</h4>
                <Link to="/">
                <button className='back__button'>Back</button>
                </Link>
                </div>
           
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
