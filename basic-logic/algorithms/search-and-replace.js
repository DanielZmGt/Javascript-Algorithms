// 1. Basic approach preserving case
export const myReplace = (str, before, after) => {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

// 2. Alternative approach with ternary
export const myReplaceShort = (str, before, after) => {
  const isCapitalized = /^[A-Z]/.test(before);
  after = isCapitalized 
    ? after[0].toUpperCase() + after.slice(1)
    : after[0].toLowerCase() + after.slice(1);
  return str.replace(before, after);
}

console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplaceShort("He is Sleeping on the couch", "Sleeping", "sitting"));
