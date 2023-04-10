import React from 'react';
import images from '../../images/men.png'
import accounts from '../../images/accounts 1.png'
import business from '../../images/business 1.png'
import chip from '../../images/chip 1.png'
import social from '../../images/social-media 1.png'
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Company from '../Company/Company';


const Home = () => {
    const datas = useLoaderData();
   
    return (

        <div>
            <div className='home d-flex justify-content-center'>
                <div className='home-info'>
                    <h1>One Step </h1>
                    <h1>Closer To Your</h1>
                    <h1><span className='dream'>Dream Job</span></h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='get-button'>Get Started</button>
                </div>
                <img src={images} alt="" />
            </div>

            {/* Job Category List */}

            <div className='job-category'>
                <h1>Job Category List</h1>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='images'>

                    <div className='job-details'>
                        <img src={accounts} alt="" />
                        <h2>Account & Finance</h2>
                        <p>300 Jobs Available</p>
                    </div>
                    <div className='job-details'>
                        <img src={business} alt="" />
                        <h2>Creative Design</h2>
                        <p>100+ Jobs Available</p>
                    </div>
                    <div className='job-details'>
                        <img src={chip} alt="" />
                        <h2>Marketing & Sales</h2>
                        <p>150 Jobs Available</p>
                    </div>
                    <div className='job-details'>
                        <img src={social} alt="" />
                        <h2>Engineering Job</h2>
                        <p>224 Jobs Available</p>
                    </div>

                </div>
            </div>

            {/* Featured Jobs */}
            <div>
                <h1 className='text-center mb-4'>Featured Jobs</h1>
                <div className='home-company'>
                {
                    datas.map(data => <Company
                    key={data.salary}
                    data ={data}
                    ></Company>)
                }
                </div>
            </div>
        </div>

    );
};

export default Home;