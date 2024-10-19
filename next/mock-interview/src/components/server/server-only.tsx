

const ServerOnly = async () => {
    await new Promise(resolve => setTimeout(resolve, 4000))
    return (
        <div>This is server component</div>
    )
}
export default ServerOnly