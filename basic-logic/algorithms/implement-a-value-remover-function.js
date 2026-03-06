export const destroyer = (arr, ...arg) => {
const destroyers = new Set(arg);
 
 return arr.filter(item => !destroyers.has(item))
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))