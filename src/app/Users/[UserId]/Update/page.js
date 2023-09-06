"use client"
import React, { useEffect, useState } from 'react';

const Page = ({params}) => {
const [user,setUser]=useState([])
const [book, setBook] = useState("data"); // Initialize with an empty string
const [reference, setReference] = useState('data'); // Initialize with an empty string
console.log("Updatepage ",params.UserId);
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior (page refresh)
  
  // No need to get values from event.target, use the state variables
  console.log(book, reference);
  fetch(`http://localhost:3000/api/HugeIdCollection/${params.UserId}`,{
    method:"PUT",
    body:JSON.stringify({book,reference})
  }).then(res=>res.json())
  .then(data=>{console.log(data)})
  // Call postdata function to make the POST request here
}
useEffect(() => {
  fetch(`http://localhost:3000/api/HugeIdCollection/${params.UserId}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
}, []);
console.log("userdata",user);
    return (
        <div>
          {user.map(index=>  <form onSubmit={handleSubmit} key={index.id}>
        <div>
          <span style={{ marginRight: '13px' }}>HadithBook</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your HadithBook"
            defaultValue={index.HadisBookName}
            onChange={(e) => setBook(e.target.value)} // Update the 'name' state
          />
        </div>
        <div>
          <span style={{ marginRight: '13px' }}>Reference</span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your reference"
            defaultValue={index.Reference}
            onChange={(e) => setReference(e.target.value)} // Update the 'email' state
          />
        </div>
       
        <button type="submit">Submit</button>
      </form>  )}
          
        </div>
    );
};

export default Page;