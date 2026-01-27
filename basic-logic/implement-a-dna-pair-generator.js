//Declare a function with an sting of any length as an argument.
/*const pairElement = (arg) => {
//Make an array from the argument making one string per arg[index]
let argArray = arg.split("")
let result = []
for (let i = 0; i < argArray.length; i++) {
    // Determine the pair based on the character
    if (argArray[i] === "A") result.push(["A", "T"]);
    else if (argArray[i] === "T") result.push(["T", "A"]);
    else if (argArray[i] === "C") result.push(["C", "G"]);
    else if (argArray[i] === "G") result.push(["G", "C"]);
  }

  // Return the result AFTER the loop finishes
  return result;
};

console.log(pairElement("ATCGA"));
// Output: [["A","T"], ["T","A"], ["C",
*/

const pairElement = (arg) =>
{
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  return arg.split("").map(char => [char, pairs[char]])
}