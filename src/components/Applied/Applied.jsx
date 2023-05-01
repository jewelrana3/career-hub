import React, { useEffect, useState } from 'react';
import './Applied.css'
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const Applied = () => {
    const datas = useLoaderData()
    
    return(
        <div>
            <h2 className='text-center'>Aplied Jobs</h2>
            {
                datas.map(data=><Details
                key={data.id}
                data={data}
                ></Details>)
            }
        </div>
    )
    
};

export default Applied;