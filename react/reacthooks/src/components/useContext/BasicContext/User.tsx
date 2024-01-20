import React, { useContext } from 'react'
import { DashboardContext } from './DashboardContext'

type Props = {}
const User = () => {
  const userData = useContext(DashboardContext)
    return (
      <div className='w-20 h-20 border-2 border-black'>
        {userData.name}
      </div>
    )
  }

export default User