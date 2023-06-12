// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Applied = () => {
    const appliedJob = useLoaderData();
    console.log(appliedJob)
    return (
        <div>
            <h2>name:{appliedJob.email}</h2>
        </div>
    );
};

export default Applied;