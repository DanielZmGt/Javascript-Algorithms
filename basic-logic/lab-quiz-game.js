
const questions = [
{
  category: "Geography", 
  question: "What is the capital city of Australia?", 
  choices: ["Sydney", "Melbourne", "Canberra"],
  answer: "Canberra" }
,

{
  category: "Science", 
  question: "Which chemical element has the symbol \"Au\"?", 
  choices: [
    "Silver", 
    "Gold", 
    "Aluminum"],
  answer: "Gold" }
,

{
  category: "Movies", 
  question: "Which movie won the first-ever Academy Award for Best Animated Feature?", 
  choices: [
    "Toy Story", 
    "The Lion King", 
    "Shrek"],
  answer: "Shrek" 
  }
,

{
  category: "History", 
  question: "In which year did the RMS Titanic sink?", 
  choices: [
    "1905", 
    "1912", 
    "1921"],
  answer: "1912" 
  }
,

{
  category: "Biology", 
  question: "How many hearts does an octopus have?", 
  choices: [
    "One", 
    "Two", 
    "Three"],
  answer:"Three" 
  }

];


const getRandomQuestion = arr => {
 const randomIndex = Math.floor(Math.random() * arr.length);
 return arr[randomIndex]   
        };
const getRandomComputerChoice = arr => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
 }
const currentQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(currentQuestion.choices)
const correctAnswer = currentQuestion.answer

const getResults = (currentQuestion, computerChoice) => {
  if (computerChoice === currentQuestion.answer) {
    return "The computer's choice is correct!"
    } else {
    return `The computer's choice is wrong. The correct answer is: ${currentQuestion.answer}`};}


