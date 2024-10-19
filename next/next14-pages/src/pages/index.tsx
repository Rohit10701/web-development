import Image from 'next/image'
import localFont from 'next/font/local'
import Layout from '@/components/layout/layout'
import { ReactElement, ReactNode, useEffect, useState } from 'react'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

export default function Home() {
	const [state, setState] = useState<number>(
		async () => {
			await new Promise((resovle) => setTimeout(() => console.log('resolve'), 4000))
			console.log('hello world i am pikachu')
			return 1
		},
		console.log('hello world i am pikachu 2'),
		console.log('hello world i am pikachu 3')
	)
	useEffect(() => {
		const fetchData = () => {
			const res = fetch('/api/hello')
		}

		fetchData()
	}, [])

	console.log({ state })

	return (
		<>
			<Image
				src={
					'https://imagedelivery.net/olI9wp0b6luWFB9nPfnqjQ/6fab1faf-2470-4874-15fd-765eaf28ce00/public'
				}
				alt='test'
				width={200}
				height={200}
			/>
			Home Page
		</>
	)
}

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<Layout>
			<>{page}</>
		</Layout>
	)
}
