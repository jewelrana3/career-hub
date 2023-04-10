import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const Statistics = () => {
    const madal = useLoaderData();
    console.log(madal)
    // const {jobDescription,Education,phone,email,Experience} = modalData;

    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    // },[])
    return (
        <div>
           <div>
                {
                    madal.map(data=><p>{data.email}</p>)
                }
           </div>
        </div>
    );
};

export default Statistics;