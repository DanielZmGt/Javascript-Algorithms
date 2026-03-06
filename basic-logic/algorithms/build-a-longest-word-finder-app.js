
// 1. Iterative approach
export const findLongestWordLength = (sentence) => {
  const wordsArr = sentence.split(" ")
  let longestWordLength = 0;
  for (let word of wordsArr) {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  }
  return longestWordLength;
}

// 2. Using reduce
export const findLongestWordReduce = (sentence) => {
  return sentence.split(' ').reduce((longest, word) => {
    return Math.max(longest, word.length);
  }, 0);
}

// 3. Using sort
export const findLongestWordSort = (sentence) => {
  return sentence.split(' ').sort((a, b) => b.length - a.length)[0].length;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordReduce("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWordSort("The quick brown fox jumped over the lazy dog"));


