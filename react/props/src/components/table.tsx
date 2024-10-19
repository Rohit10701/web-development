import React, { use } from 'react'

export type user = {
	name: string
	id: 1
	role: string
	age: number
}

interface TableProps {
	users: user[]
}
const Table = ({ users }: TableProps) => {
	return (
		<div>
			{users.map((user) => (
				<>
					<div key={user.id}>
						{user.name} {user.age}
					</div>
				</>
			))}
		</div>
	)
}

export default Table
