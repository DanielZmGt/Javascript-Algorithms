// 1. Formula-based solution (Arithmetic Progression)
const sumAll = (arr) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  return (max - min + 1) * (min + max) / 2
}

// 2. Iterative solution
const sumAllIterative = (arr) => {
  let sum = 0;
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    sum += i;
  }
  return sum;
}

console.log(`Formula: sumAll([1, 4]) = ${sumAll([1, 4])}`);
console.log(`Iterative: sumAllIterative([1, 4]) = ${sumAllIterative([1, 4])}`);