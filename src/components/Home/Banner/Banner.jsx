// import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='flex '>
                <div className='mt-32 ml-10 mx-auto'>
                    <h1 className="text-6xl font-bold">One Step <br /> Closer To Your <br /> Dream Job</h1>
                    <p className="mt-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button style={{backgroundColor:'blue'}} className="btn btn-primary mt-6 px-3 py-2 rounded text-white">Get Stared</button>
                </div>
                <img style={{width:'600px'}} src='https://i.ibb.co/p0LSWpR/P3-OLGJ1-copy-1.png' alt="" />
            </div>
        </div>
    );
};

export default Banner;