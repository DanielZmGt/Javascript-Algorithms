

const test = "Hola"

// 1. Iterative approach
export const repeatStringNumTimes = (str, num) => {
  let newStr = ("")
  if (num <= 0) return "";
  for (let i = 0; i < num; i++) {
    newStr += str 
  }
  return newStr
}

// 2. Recursive approach
export const repeatStringRecursive = (str, num) => {
  if (num <= 0) return "";
  if (num === 1) return str;
  return str + repeatStringRecursive(str, num - 1);
}

// 3. Using built-in repeat() method
const repeatStringNative = (str, num) => num > 0 ? str.repeat(num) : "";

console.log(`Iterative: ${repeatStringNumTimes(test, 5)}`)
console.log(`Recursive: ${repeatStringRecursive(test, 5)}`)
console.log(`Native: ${repeatStringNative(test, 5)}`)


