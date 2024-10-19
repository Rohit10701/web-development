import { Data } from '@/pages/api/hello'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import useSWR from 'swr'

interface LayoutProps{
    children : ReactNode
}
const Layout = ({children} : LayoutProps) => {
    const fetcher = (url: string) => fetch(url).then(res => res.json());
    const { data, error } = useSWR<Data>('/api/hello', fetcher)
 
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
  return (
    <div className='flex flex-col'>
        <header><ul>
      <li>
        <Link href="/?counter=10" shallow={true}>Home</Link>
      </li>
      <li>
        <Link href="/blog" prefetch={false}>About Us</Link>
      </li>
      <li>
        <Link href="/blog/hello-world">Blog Post</Link>
      </li>
    </ul></header>
        <div className='w-full h-[64px] bg-red-500'>fetched data in layout : {data.name}</div>
        {children}
        <div className='w-full h-[64px] bg-red-500'>3123123</div>
    </div>
  )
}

export default Layout