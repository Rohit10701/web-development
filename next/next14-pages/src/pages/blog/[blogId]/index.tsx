import Layout from '@/components/layout/layout'
import { useRouter } from 'next/router'
import React from 'react'

interface BlogsProps {
    blogId : string
}

const Blogs = ({blogId} : BlogsProps) => {
    const router = useRouter()
    const query = router.query
  return (
    <div>
    <div>This page is for indivisual Blogs</div>
    <div>params : {query.blogId}</div>
    <div>query : {JSON.stringify(query)}</div>
    </div>
  )
}

export default Blogs

Blogs.Layout = Layout