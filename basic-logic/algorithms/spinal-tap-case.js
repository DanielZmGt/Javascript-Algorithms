// 1. Using replace and regular expressions
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

// 2. Alternative regex approach
function spinalCaseAlt(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/\s|_/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCaseAlt("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
