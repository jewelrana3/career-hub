import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <ul className='d-flex justify-content-around align-items-center'>
                <h3>Project Hub</h3>
                <div className='header-tag'>
                    <Link to="/">Home</Link>
                    <Link to="/statistics">Statistics</Link>
                    <Link to="/blog">Blog</Link>
                    
                </div>
                <button className='apply-button'>Apply Now</button>
            </ul>
        </nav>
    );
};

export default Header;