"use client"
import React, { ReactNode, useState } from 'react'

const Counter = ({serverComp, delayed} : {serverComp : React.ReactNode, delayed? : ReactNode}) => {
	const [count, setCount] = useState(0)
	return (
		<>
			<div className='w-10 h-10 bg-red-500 text-black'>Counter : {count}</div>
			<div>
				<button
					className='w-20 h-10 text-center rounded-sm border-black border-[1px] bg-pink-400 text-black'
					onClick={() => setCount(count + 1)}>
					increment{' '}
				</button>
				<button
					className='w-20 h-10 text-center rounded-sm border-black border-[1px] bg-pink-400 text-black'
					onClick={() => setCount(count - 1)}>
					decrement{' '}
				</button>
			</div>

            the server comp will render on server
            {serverComp}



            {/* the delayed comp
            {delayed} */}
		</>
	)
}

export default Counter
