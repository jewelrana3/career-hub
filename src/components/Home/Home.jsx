import React from 'react';
import images from '../../images/men.png'
import './Home.css'

const Home = () => {
    return (
        <div className='home d-flex justify-content-center'>
            <div className='home-info'>
                <h1>One Step </h1>
                <h1>Closer To Your</h1> 
                <h1>Dream Job</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='get-button'>Get Started</button>
            </div>
            <img src={images} alt="" />
        </div>
    );
};

export default Home;