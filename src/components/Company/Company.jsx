import React from 'react';
import './Company.css'
import picture from '../../images/google-1-1 1.png'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Company = ({ data }) => {
    const { company, image, salary, location, job } = data;
    return (
       <div>
        
         <div className='company'>
         <img src={image} alt="" />
            <h5 className='title'>{company}</h5>
                <button>Remote</button><button>Full Time</button>
                <p><span> <MapPinIcon className="mapicon" />{location}</span><span>{salary}</span></p>
            
                <div className='view-details'>
                   <Link to='/statistics'> <button>View Details</button></Link>
                </div>
        </div>
       
       </div>
    );
};

export default Company;