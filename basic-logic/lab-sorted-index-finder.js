const getIndexToIns = (arr, num) => {
  const index = arr
  .sort((a, b) => a - b)
  .findIndex(a => a >= num)

  return index === -1 ? arr.length : index
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35) )