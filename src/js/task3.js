const canIterate = (obj) => {
	return (obj?.[Symbol.iterator]) ? true : false
}



console.log(canIterate(new Map())); // true
console.log(canIterate(new Set())); // true
console.log(canIterate(null)); // false
console.log(canIterate(10)); // false
console.log(canIterate(undefined)); // false
console.log(canIterate({})); // false
console.log(canIterate([])); // true
console.log(canIterate("Maks")); // true

