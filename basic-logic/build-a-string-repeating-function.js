

const test = "Hola"


const repeatStringNumTimes = (str, num) => {
let newStr = ("")

if (num <= 0) {
  return ""
  }
for (let i = 0; i < num; i++) {
  newStr += str 
}
return newStr
}

console.log(repeatStringNumTimes(test, 5))


