import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <>
    <div>This is Blog Entry Page</div>
    <li>
        <Link href="/" prefetch={false}>Home</Link>
      </li>
    </>
  )
}

export default Blog