// import React from 'react';
import { useLoaderData } from 'react-router-dom';

const View = () => {
    const details = useLoaderData();
    console.log(details)
    const { image, salary, email, jobTitle,location} = details;
    return (
        <div className="pt-20 mb-12 ml-12">
            <h2 className="text-3xl text-center">Here are the details of the products</h2>
            <div className="flex mt-10">
                <img style={{width:'500px'}} src={image} alt="" />
                <div className="mt-14 ml-10">
                    <h1 className="text-2xl font-bold">{jobTitle}</h1>
                    <h2 className="mt-4 text-2xl font-serif">Seller Info</h2>
                    
                    <p>Email: {email}</p>
                    <h2 className="mt-4 text-2xl">Product Info</h2>
                    
                    <h2>Price:  {salary}</h2>
                    <p>Location: {location}</p>
                   
                </div>

            </div>
        </div>
    )
};

export default View;