const translatePigLatin = (str) => {

const vowelIndex = str.search(/[aeiou]/)

if (vowelIndex === -1){
  return str + "ay"
  } else if (vowelIndex === 0){
   return str + "way"
 } else {
  return `${str.slice(vowelIndex)}${str.slice(0, vowelIndex)}ay`
}
}



const translatePigLatin1 = (str) => {
let pigLatinWord = ""
if (str.indexOf(str.match(/[aeiou]/)) === -1){pigLatinWord = str + "ay"}
if (str.indexOf(str.match(/[aeiou]/)) === 0){pigLatinWord = str + "way"}
if (str.indexOf(str.match(/[aeiou]/)) > 0){
  const cluster = str.slice(0, (str.indexOf(str.match(/[aeiou]/))) )
  const rest = str.slice((str.indexOf(str.match(/[aeiou]/))), str.length)
  pigLatinWord = rest + cluster + "ay"
}

return pigLatinWord
}





