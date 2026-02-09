
const arre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const lulu = 3

const chunkArrayInGroups = (arr, num) => {
  const newArr = []
for (let i = 0; i < arr.length; i += num) {

newArr.push(arr.slice(i, i + num ))
}
return newArr
}


