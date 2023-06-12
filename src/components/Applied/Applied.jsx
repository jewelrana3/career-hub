// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Applied = () => {
  const applied = useLoaderData();  
    console.log(applied)
    return (
        <div>
            <h2>email:{applied.email}</h2>
            <h2>email:{applied.fulltime}</h2>
        </div>
    );
};

export default Applied;