import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <ul className='d-flex justify-content-around align-items-center'>
                <h3>Project Hub</h3>
                <div>
                    <a href="">Home</a>
                    <a href="">Statistics</a>
                    <a href="">Blog</a>
                    
                </div>
                <button>Apply Now</button>
            </ul>
        </nav>
    );
};

export default Header;