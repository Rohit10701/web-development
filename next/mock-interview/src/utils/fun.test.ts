import { sum } from './fun'

test('sum test', () => {
	const result = sum(2, 2)
	expect(result).toBe(4)
})

test('sum test for error', () => {
	expect(() => sum(2, 2, "a")).toThrow("every args must be a number!")
})

