import Table, { user } from '@/components/table'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
	const [userList, setUserList] = useState<user[]>([
		{
			name: 'rohit',
			id: 1,
			age: 23,
			role: 'dev'
		}
	])

	return (
		<>
			<button
				onClick={() =>
					setUserList([
						...userList,
						{
							name: 'rohit',
							id: 1,
							age: 25,
							role: 'dev'
						}
					])
				}>
				Update Data
			</button>
			<Table users={userList} />
		</>
	)
}
