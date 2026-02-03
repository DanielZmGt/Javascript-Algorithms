const getGCD = (a, b) => (b === 0 ? a : getGCD(b, a % b));
const getLCM = (a, b) => (a * b) / getGCD(a, b);
const smallestCommons = (arr) =>{
  let asc = (a, b) => a - b;
  arr.sort(asc)

  let allInBetween = []
  for (let i = arr[0]; i <= arr[1]; i++)
    allInBetween.push(i);
  console.log(allInBetween)
  return allInBetween.reduce((multiple, curr) => {
    return getLCM(multiple, curr);} )
  
  
}
console.log(smallestCommons([14, 21]))
