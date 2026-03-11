

const rangeOfNumbers = (startNum, endNum) =>
  startNum === endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];


