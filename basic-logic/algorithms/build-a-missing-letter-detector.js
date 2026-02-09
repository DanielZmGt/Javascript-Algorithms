
const prueba = "rstuwxz"
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const fearNotLetter = (str) => {
let begin = alphabet.indexOf(str[0])
let pilot = alphabet.slice(begin, str.length + begin + 1)
let foundLetter = ""  
console.log(begin)
console.log(pilot)
for (let i = 0; i < pilot.length; i++) {
  if (str.indexOf(pilot[i]) === -1) {
    foundLetter = pilot[i]
    return foundLetter
  } 
  }
  }
console.log(fearNotLetter("abce"))


