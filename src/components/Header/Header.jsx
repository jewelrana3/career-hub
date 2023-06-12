// import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-4 bg-emerald-950'>
        <nav>
        <ul className='flex justify-around text-white p-4'>
            <h3>Project Hub</h3>
            <div className='flex gap-4'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjob">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
                
            </div>
            <button className='apply-button text-2xl'>Apply Now</button>
        </ul>
    </nav>
    </div>
    );
};

export default Header;