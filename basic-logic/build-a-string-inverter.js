
const reverseString = (str) => {
  let reverseWord = ("");
  for (let i = 0; i < str.length; i++) {
   let letter = str[str.length - 1 - i]
   reverseWord += letter
   }
   return reverseWord
  }

console.log(reverseString("hello World"))

/*const reverseString2 = (str) => {
  return str.split('').reverse().join("")
}
console.log(reverseString2("Hello World"))*/


