"use client"
import React, { useState, useEffect } from 'react';

export default function App() {
  const [state, setState] = useState(""); // Corrected useState usage

  useEffect(() => {
    fetch("https://api.abillion.com/v1/categories/?platform=web", {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MTMzNTc1OTV9.Nn0jgaQ4ssLzAgMW1f9Z_SN-TDOabRv0p8QaLaHOXX4'
      }
    })
    .then(response => response.json()) // Handling fetch response
    .then(data => {
        setState(JSON.stringify(data))
      console.log(data); // Handle the data fetched from the API
    })
    .catch(error => {
      console.error('Error fetching data:', error); // Handle errors
    });
  }, []); // Correct dependency array

  return <h1>{state}</h1>;
}
