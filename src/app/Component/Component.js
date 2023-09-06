"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Component = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/HugeIdCollection')
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            {data.map((index) => (
                <div key={index.id}>
                    <div>{index.HadisBookName}</div>
                    <div>{index.Reference}</div>
                    <Link href={`/Users/${index.id}/Update`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};

export default Component;
