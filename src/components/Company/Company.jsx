import React from 'react';
import './Company.css'

const Company = ({ data }) => {
    const { company, images, salary, location, job } = data;
    return (
        <div className='company'>
            <h5>{company}</h5>
           
                {/* <button>j</button><button>k</button> */}
                <p><span>{location}</span><span>{salary}</span></p>
            
            
        </div>
    );
};

export default Company;