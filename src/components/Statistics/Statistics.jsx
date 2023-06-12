// import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Statistics = () => {

    const students = [
        { id: 1, name: "John", mathMarks: 44, assignmentMarks: 40 },
        { id: 2, name: "Emma", mathMarks: 40, assignmentMarks: 42 },
        { id: 3, name: "Michael", mathMarks: 44, assignmentMarks: 48 },
        { id: 4, name: "Sophia", mathMarks: 34, assignmentMarks: 45 },
        { id: 5, name: "Daniel", mathMarks: 40, assignmentMarks: 46 },
        { id: 6, name: "Olivia", mathMarks: 41, assignmentMarks: 42 },
        { id: 7, name: "William", mathMarks: 34, assignmentMarks: 40 }
    ];

    return (
        <div className='mt-16'>
            <LineChart
                width={900}
                height={500}
                data={students}
            >
                 <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="mathMarks" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="assignmentMarks" stroke="#82ca9d" />


            </LineChart>
        </div>
    );
};

export default Statistics;