
let num = 15

// 1. Iterative Approach (using a for loop)
export const factorializeIterative = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++ ) {
    result *= i
  }
  return result; 
} 

// 2. Recursive Approach
export const factorializeRecursive = (num) => {
  if (num < 0) return -1;
  if (num === 0 || num === 1) return 1;
  return num * factorializeRecursive(num - 1);
}

// 3. Functional Approach (using reduce)
export const factorializeFunctional = (num) => {
  if (num < 0) return -1;
  if (num === 0) return 1;
  return Array.from({ length: num }, (_, i) => i + 1)
    .reduce((acc, curr) => acc * curr, 1);
}

const factorial = factorializeIterative(num)
console.log(`Iterative: Factorial of ${num} is ${factorial}`)
console.log(`Recursive: Factorial of ${num} is ${factorializeRecursive(num)}`)
console.log(`Functional: Factorial of ${num} is ${factorializeFunctional(num)}`)




