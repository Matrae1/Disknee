import React from 'react';
import '../Styles/Home.css'
import Banners from './Banners';
import ImageSlider from './ImageSlider';
import ReccomendedMovies from './ReccomendMovies';

const Home = () => {
    return (
        <div className="home">
            <ImageSlider />
            <Banners />
            <ReccomendedMovies />
        </div>
    );
}

export default Home;
