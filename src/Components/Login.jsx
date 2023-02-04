import React from 'react';
import "../Styles/Login.css"
import imgOne from '../Assets/images/cta-logo-one.svg'
import imgTwo from '../Assets/images/cta-logo-two.png'


const Login = () => {
    return (
        <div className="login__container">
            <div className="login__content">
            <img src={imgOne} alt="" />
            <div className="signUp__button">
              <a href=""> Get all of this here</a>  
            </div>
            <div className="login__description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, perspiciatis voluptatem quam rerum repudiandae magni nam quis quaerat facere tempora a molestias eveniet dolorum aspernatur inventore voluptate. Magnam, tempora officiis?</p>
            </div>
                <img className="imgTwo" src={imgTwo} alt="" />
            </div>
            
        </div>
    );
}

export default Login;
