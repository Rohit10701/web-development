"use client"
import React, { Suspense, useState } from 'react'

const TheClient = ({server} : {server : React.ReactNode}) => {
    const [show, setShow] = useState(false)
  return (
    <div className='flex flex-col gap-y-4'>
        This is a client comp
        <button onClick={() => setShow(!show)}>Show Server Comp</button>
        {show && <Suspense fallback={<>loading...</>}>
            {server}
        </Suspense>}
    </div>
  )
}

export default TheClient