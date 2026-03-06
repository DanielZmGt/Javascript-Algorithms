export const steamrollArray = (arr) => {
  const flattenedArray = [];
   
  arr.forEach(item => {
  Array.isArray(item) 
  ? flattenedArray.push(...steamrollArray(item))
  : flattenedArray.push(item) 
  })
  return flattenedArray
};
 
 
  console.log(steamrollArray([[["a"]], [["b"]]]))
  console.log(steamrollArray([1, {}, [3, [[4]]]]))
  console.log(steamrollArray([1, [2], [3, [[4]]]]))