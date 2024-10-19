"use client"
interface Props {
    children : React.ReactNode
}
const Error = ({children} : Props) => {
  return (
    <div className="w-96 bg-yellow-400">Error Occurred</div>
  )
}

export default Error