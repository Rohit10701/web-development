
import ShowParams from '@/components/params/show-params'
import { Suspense } from 'react'

type Props = {}
function ShowParamsThingy() {
	return <>Show Params</>
}
const User = (props: Props) => {
	return (
		<>
			<Suspense fallback={<ShowParamsThingy />}>
				<ShowParams />
			</Suspense>
		</>
	)
}

export default User
