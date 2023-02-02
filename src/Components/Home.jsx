import React from 'react';
import '../Styles/Home.css'
import Banners from './Banners';
import ImageSlider from './ImageSlider';

const Home = () => {
    return (
        <div className="home">
            <ImageSlider />
            <Banners />
        </div>
    );
}

export default Home;
