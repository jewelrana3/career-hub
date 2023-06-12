// import React from 'react';

import { Link } from "react-router-dom";
import { MapPinIcon } from '@heroicons/react/24/solid'

const Company = ({ data }) => {
    const { company, image, salary, location, id, remote, fulltime } = data;
    return (

        <div>
            <div className="card w-96 bg-base-100 border-2 p-4">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">
                        <span className="text-2xl font-semibold mt-4">{company}</span>
                        <div className="badge badge-secondary mt-4">
                            <button className="remote">{remote}</button><button className="remote">{fulltime}</button>
                        </div>
                    </h2>

                    <p className="flex mt-3">
                        <MapPinIcon style={{ width: '20px' }} />
                        <span>{location}</span>
                        <span>{salary}</span></p>

                    <div className="card-actions justify-start mt-4">
                        <Link to={`/details/${id}`}>  <button className="detailsp p-2 text-white">View Details</button></Link>

                    </div>
                </div>
            </div>
            {/* <div className='border'>
                <img src={image} alt="" />
                <h5 className=''>{company}</h5>
                <button>Remote</button><button>Full Time</button>
                <p><span> <MapPinIcon style={{ width: '20px' }} className="mapicon" />{location}</span><span>{salary}</span></p>

                <div className='view-details'>
                    <Link to={'/statistics'}> <button>View Details</button></Link>
                    {/* <button onClick={handleAdd}>view</button> */}
        </div>


    );
};

export default Company;