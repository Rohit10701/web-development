import React from 'react'

interface Props {
    children : React.ReactNode
}
const layout = ({children} : Props) => {
  return (
    <div className='bg-red-500'>{children}</div>
  )
}

export default layout