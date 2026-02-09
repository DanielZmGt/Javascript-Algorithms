
const getAverage = (gradesArr) => {
  let sum = 0
  let average = 0
  for (let i = 0; i < gradesArr.length; i++) {
    sum += gradesArr[i]
    average = sum / gradesArr.length
  }
  return average
}
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

const getGrade = (score) => {
  let grade = ""
  if (score === 100) {grade = "A+"}
  else if (score > 100) {grade = "A++"}
  else if (score <= 99 && score >= 90) {grade = "A"}
  else if (score <= 89 && score >= 80) {grade = "B"}
  else if (score <= 79 && score >= 70) {grade = "C"}
  else if (score <= 69 && score >= 60) {grade = "D"}
  else if (score <= 59) {grade = "F"}
  return grade
}
console.log(getGrade(91));

const hasPassingGrade = (score) => {
  if (getGrade(score) === "F") {return false}
  return true
}
console.log(hasPassingGrade(60));

const studentMsg = (scoreArr, studentScore) => {
let passedOrFailed = ""
  if (hasPassingGrade(studentScore) === true) {
    passedOrFailed  = "You passed the course."
  } else {passedOrFailed = "You failed the course."}
  
  return `Class average: ${getAverage(scoreArr)}. Your grade: ${getGrade(studentScore)}. ${passedOrFailed}`
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37) )



