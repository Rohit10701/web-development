import TheClient from '@/components/client/the-client'
import ServerOnly from '@/components/server/server-only'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			Hello world
			<TheClient server={<ServerOnly />}/>
		</>
	)
}
