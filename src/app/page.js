"use client"
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState(''); // Initialize with an empty string
  const [email, setEmail] = useState(''); // Initialize with an empty string
  const [number, setNumber] = useState(''); // Initialize with an empty string

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior (page refresh)
    
    // No need to get values from event.target, use the state variables
    console.log(name, email, number);

    // Call postdata function to make the POST request here
    postdata();
  }

  async function postdata() {
    const response = await fetch('http://localhost:3000/postApi/post', {
      method: 'POST',
      body: JSON.stringify({ name: name, email: email, number: number })
    });
    const data = await response.json();
    if (data.success) {
      console.log('This is JSON Data');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span style={{ marginRight: '13px' }}>Name</span>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update the 'name' state
          />
        </div>
        <div>
          <span style={{ marginRight: '13px' }}>Email</span>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update the 'email' state
          />
        </div>
        <div>
          <span style={{ marginRight: '13px' }}>Number</span>
          <input
            type="text"
            name="number"
            id="number"
            placeholder="Enter your number"
            value={number}
            onChange={(e) => setNumber(e.target.value)} // Update the 'number' state
          />
        </div>
        <button type="submit">Submit</button>
      </form>




    </div>
  );
}
