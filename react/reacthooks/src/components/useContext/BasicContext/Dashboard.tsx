import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'

type Props = {}
const Dashboard = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <Body />
    </div>
  )
}

export default Dashboard