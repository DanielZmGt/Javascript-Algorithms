// 1. Basic approach using slice and if-else
export const truncateString = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// 2. Concise ternary approach
const truncateStringShort = (str, num) => 
  str.length > num ? str.slice(0, num) + "..." : str;

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateStringShort("Peter Piper picked a peck of pickled peppers", 11));
