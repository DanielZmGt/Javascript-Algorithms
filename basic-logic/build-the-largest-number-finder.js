
/*const largestOfAll = (arr) => {
 const largestNumArr = [] 
 for 
  (let i = 0; i < arr.length; i++) { 
  let largestNumber = arr[i][0]
   for (let j = 0; j < arr[i].length; j++) {
     if (arr[i][j] > largestNumber) {
       largestNumber = arr[i][j]
       }
    }
    largestNumArr.push(largestNumber)
  }
  return largestNumArr 
};

console.log(largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]))*/

/*const largestOfAll = (arr) => {
  return arr.map(subArr => Math.max(...subArr));
};*/

const largestOfAll = (arr) => {
  return arr.map(subArray => {
    return subArray.reduce((currentMax, currentNum) => {
      return currentNum > currentMax ? currentNum : currentMax;
    });
  });
};


