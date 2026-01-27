/*const dropElements = (arr, func) => {
 let result = []
 let startIndex = arr.findIndex(func)
 if (startIndex !== -1) {result = arr.slice(startIndex)
 }
 return result
}*/

const dropElements = (arr, func) => {
  return arr.findIndex(func) === -1 ? [] : arr.slice(arr.findIndex(func))
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;}));
