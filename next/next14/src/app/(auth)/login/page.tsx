"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Login = () => {
    const createError = () => {
        throw Error("This is a custom error, it should be handled!");
    }
    // useEffect(()=>{
    //     throw Error("This is a custom error, it should be handled!");

    // }, [])
    const [isLoading, setIsLoading] = useState(true);

  // useEffect to set a delay for loading the page content
  useEffect(() => {
    // Set a timer to change the loading state after 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      setIsLoading(false); // Update state to indicate loading is complete
    }, 2000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
        <Link href={"/explore"}  replace>Log in</Link>
        <button onClick={createError}>Create Error</button>
    </div>
  )
}

export default Login