import React from 'react';
import './Details.css'

const Details = ({ data }) => {
    const { remote, fulltime, location, jobTitle, salary, image } = data
    return (
        <div className='d-flex p-2 rounded m-2' style={{ margin: '53px 0 0 20px',border:"1px solid" }}>
            <img className='rounded' style={{ width: '240px', height: '240px', }} src={image} alt="" />
            <div className='ms-4' style={{marginTop:'37px',}}>
                <h4>{jobTitle}</h4>
                <p>LLC Devolopment</p>
                <div className=' d-flex ' >
                    <p className='remote'>{remote}</p>
                    <p className='remote' style={{ marginLeft: '14px' }}>{fulltime}</p>
                </div>
                <div className='d-flex'>
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;