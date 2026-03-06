// 1. Basic approach using for loop
export const getIndexToIns = (arr, num) => {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length;
}

// 2. Using filter
export const getIndexToInsFilter = (arr, num) => {
  return arr.filter(val => num > val).length;
}

// 3. Using push, sort and indexOf
export const getIndexToInsSort = (arr, num) => {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToInsFilter([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToInsSort([2, 5, 10], 15)); // 3
