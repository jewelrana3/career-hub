// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Company from "./Company";

const Featured = () => {
    const datas = useLoaderData();

    return (
        <div className="mt-16">
            <h1 className='text-4xl font-semibold text-center'>Featured Jobs</h1>
            <p className='text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 ml-32 gap-4'>
                {
                    datas.map(data => <Company
                        key={data.id}
                        data={data}
                    ></Company>)
                }
            </div>
        </div>
    );
};

export default Featured;