// import React from 'react';

import { useLoaderData } from "react-router-dom";
import JobDetails from "./JobDetails";

const Applied = () => {
  const applied = useLoaderData();  
    console.log(applied)
    return (
        <div>
            {
               applied.map(pd=> <JobDetails
               key={pd.id}
               pd={pd}
               ></JobDetails>)
            }
            
        </div>
    );
};

export default Applied;