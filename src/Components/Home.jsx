import React from 'react';
import '../Styles/Home.css'
import Banners from './Banners';
import ImageSlider from './ImageSlider';
import Movies from './Movies';

const Home = () => {
    return (
        <div className="home">
            <ImageSlider />
            <Banners />
            <Movies />
        </div>
    );
}

export default Home;
