
const findLongestWordLength = (sentence) => {
  const wordsArr = sentence.split(" ")
  let longestWord = (wordsArr[0])
  for (let word of wordsArr) {
    if (longestWord.length <= word.length ) {
      longestWord = word}
  }
  return longestWord.length
}


