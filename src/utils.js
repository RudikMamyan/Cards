export function sortHandler(arr, sort) {
	const arrCopy = [...arr];
	return sort ? arrCopy.sort((a, b) => a - b) : arrCopy;
}
