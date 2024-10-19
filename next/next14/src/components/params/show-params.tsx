'use client'
import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useCallback } from 'react'

const ShowParams = () => {
    const router = useRouter()
	const searchParams = useSearchParams()
	const pathname = usePathname()
	const { userId } = useParams()

	const sort = useCallback(
		(query: string, value: string) => {
			const param = new URLSearchParams(searchParams.toString())
			param.set(query, value)
			return param.toString()
		},
		[searchParams]
	)
	return (
		<>
			<div className='flex flex-col gap-y-4'>
				<span>user</span>
				<span>searchParams - q : {searchParams.get('sort')}</span>
				<span>searchParams - l : {searchParams.get('l')}</span>
				<span>pathname : {pathname}</span>
				<span>parmas : {userId}</span>
			</div>

			<button
				onClick={() => {
					// <pathname>?sort=asc
					router.push(pathname + '?' + sort('sort', 'asc'))
				}}>
				ASC
			</button>
            <button
				onClick={() => {
					// <pathname>?sort=asc
					router.push(pathname + '?' + sort('sort', 'desc'))
				}}>
				DESC
			</button>
		</>
	)
}

export default ShowParams
