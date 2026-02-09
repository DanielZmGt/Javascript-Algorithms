
// 1. Iterative approach
const reverseString = (str) => {
  let reverseWord = ("");
  for (let i = 0; i < str.length; i++) {
    let letter = str[str.length - 1 - i]
    reverseWord += letter
  }
  return reverseWord
}

// 2. Built-in methods approach
const reverseString2 = (str) => {
  return str.split('').reverse().join("")
}

// 3. Recursive approach
const reverseStringRecursive = (str) => {
  if (str === "") return "";
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

console.log(`Iterative: ${reverseString("hello World")}`)
console.log(`Built-in: ${reverseString2("hello World")}`)
console.log(`Recursive: ${reverseStringRecursive("hello World")}`)


