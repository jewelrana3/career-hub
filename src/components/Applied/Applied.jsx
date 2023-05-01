import React, { useEffect, useState } from 'react';
import './Applied.css'
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const Applied = () => {
    const datas = useLoaderData()

    return (
        <div>
            <h2 className='text-center' style={{ marginBottom: '120px' }}>Aplied Jobs</h2>
            <select id="cars" style={{marginBottom:'70px',marginLeft:'78rem'}}>
                <option value="volvo">Remote</option>
                <option value="saab">Fulltime</option>
               
            </select>
            {
                datas.map(data => <Details
                    key={data.id}
                    data={data}
                ></Details>)
            }
        </div>
    )

};

export default Applied;