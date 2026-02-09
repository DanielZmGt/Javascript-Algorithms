// 1. Basic approach using closures
function addTogether() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (second === undefined) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}

// 2. Alternative approach with check types
function addTogetherAlt() {
  const [arg1, arg2] = arguments;
  const isNum = (n) => typeof n === 'number';

  if (!isNum(arg1)) return undefined;

  if (arguments.length === 1) {
    return (n) => isNum(n) ? arg1 + n : undefined;
  }

  if (!isNum(arg2)) return undefined;

  return arg1 + arg2;
}

console.log(addTogether(2, 3)); // 5
console.log(addTogether(5)(7)); // 12
console.log(addTogether(2, "3")); // undefined
