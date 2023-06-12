// import React from 'react';

import { useLoaderData } from "react-router-dom";
import './Details.css'
import { addToDb, getShoppingCart } from "../../utilies/fakedb";
import { useEffect } from "react";

const Details = () => {
    const details = useLoaderData();
    const { id, jobDescription, Education, address, Experience, phone, email, salary, jobTitle } = details;


    useEffect(() => {
       
        const storedCart = getShoppingCart();
        console.log(storedCart)
        for (const id in storedCart) {
            // const saveCart = details.find(product => product.id === id) 
            console.log(id)
        }
    }, [details])
    const addToHandle = details => {
        console.log(details)
        addToDb(id)
    }
    return (
        <div>
            <h2 className="text-3xl text-center mt-8">Job Details</h2>
            <div className="grid grid-cols-2 mt-12">
                <div className="tag px-20 bg-slate-100 py-4 ml-4 mr-4 gap-4">
                    <p className="font-thin"><span className="font-semibold">jobDescription</span>:{jobDescription}</p>
                    <p className="font-thin pt-2"><span className="font-semibold my-2">Education</span>:{Education}</p>
                    <p className="font-thin pt-2"><span className="font-semibold">Experience</span>:{Experience}</p>
                </div>
                <div className="bg-sky-200 px-10 py-4 justify-start">
                    <h2 className="text-sm font-semibold ">Job Details</h2>
                    <div className="mt-2 border-b-2 border-indigo-500 ..."></div>
                    <p>salary: {salary}</p>
                    <p>jobTitle: {jobTitle}</p>
                    <div className="mt-2 border-b-2 border-indigo-500 ..."></div>
                    <h2 className="text-sm font-semibold  mt-3">Contact Information</h2>
                    <div className="mt-2 border-b-2 border-indigo-500 ..."></div>
                    <p>phone:{phone}</p>
                    <p>Email: {email}</p>
                    <p>Address: {address}</p>
                </div>
            </div>
            <button onClick={() => addToHandle(details)} style={{ marginLeft: '300px ', width: '640px' }} className="mt-4 p-2 text-white bg-cyan-600">Apply Now</button>

        </div>
    );
};

export default Details;