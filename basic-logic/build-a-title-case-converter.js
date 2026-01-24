const titleCase = str => str.toLowerCase().split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")

console.log(titleCase("I'm a little tea pot"))

const titleCase2 = str => {
  let newArray = str.toLowerCase().split(" ")
  let result = []
  for (let i = 0; i < newArray.length; i++) {
    let head = newArray[i][0].toUpperCase()
    let tail = newArray[i].slice(1)
    result.push(head + tail)
  }
  return result.join(" ")
}
console.log(titleCase2("I'm a little tea pot"))

const titleCase3 = (str) => {
  return str
    .toLowerCase() // 1. Normalize everything to lowercase
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
};

console.log(titleCase3("I'm a little tea pot"));
