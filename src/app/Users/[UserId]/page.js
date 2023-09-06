"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const page = ({params}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/HugeIdCollection/${params.UserId}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            {data.map((index) => (
                <div key={index.id}>
                    <div>{index.HadisBookName}</div>
                    <div>{index.Reference}</div>
                    {/* <Link href={`/Update/${index.id}`}>Edit</Link> */}
                </div>
            ))}
        </div>
    );
};

export default page;
