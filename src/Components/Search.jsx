import React, { useEffect, useState } from 'react'
import '../Styles/Search.css'
import {films} from '../data.js'
import Media from '../UI/Media';



const Search = () => {
 const [value, setValue] = useState("");

 const onChange = (e) => {
  e.preventDefault();

  setValue(e.target.value)
 }

 console.log(value)
 console.log(films)

  return (
    <div className="search__page">
            <div className="input__wrapper">
              <input type="text" placeholder='Search by title, actor, or genre '
              value={value}
              onChange={onChange}/>
            </div>
      <div className='movies__main'>
            <h4>Explore</h4>
            <div className='movies'>
                {
                films.filter(film => {
                  const searchTerm = value.toLowerCase();
                  const title = film.title.toLowerCase();
                  const starring = film.starring.toLowerCase();
                  const genre = film.genre.toLowerCase();

                  return searchTerm && title.includes(searchTerm) || searchTerm && starring.includes(searchTerm) || searchTerm && genre.includes(searchTerm)
                })
                .map((film) => ( 
                <Media film={film} key={film.id}/>
                ))}
                
                
            </div>
            
        </div>
    </div>
  )
}

export default Search
