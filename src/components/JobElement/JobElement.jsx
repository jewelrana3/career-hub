// import React from 'react';
import './JobElement.css'
const JobElement = () => {
    return (
        <div>
            <h1 className="text-4xl text-center font-semibold mt-16">Job Category List</h1>
            <p className='text-center mt-6 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex justify-around'>

                <div className='job-details'>
                    <img src="https://i.ibb.co/XZMMpL3/business-1.png" alt="" />
                    <h2 className='title'>Account & Finance</h2>
                    <p>300 Jobs Available</p>
                </div>
                <div className='job-details'>
                    <img src="https://i.ibb.co/9wyTrWX/social-media-1.png" alt="" />
                    <h2 className='title'>Creative Design</h2>
                    <p>100+ Jobs Available</p>
                </div>
                <div className='job-details'>
                    <img src="https://i.ibb.co/YdBT7fV/accounts-1.png" alt="" />
                    <h2 className='title'>Marketing & Sales</h2>
                    <p>150 Jobs Available</p>
                </div>
                <div className='job-details'>
                    <img src="https://i.ibb.co/LPcpT6Y/chip-1.png" alt="" />
                    <h2 className='title'>Engineering Job</h2>
                    <p>224 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobElement;