"use client"
import React, { useEffect, useState } from 'react';
import Component from '../Component/Component';

const page = () => {
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/api/HugeIdCollection')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    console.log(data);
    return (
        <div>
            <Component/>
            
        </div>
    );
};

export default page;