export function sum(...nums: number[]) {
	return nums.reduce((prev, num) => {
        if(typeof num !== "number"){
            throw new Error("every args must be a number!")
        }
        return prev + num
    }, 0)
}
