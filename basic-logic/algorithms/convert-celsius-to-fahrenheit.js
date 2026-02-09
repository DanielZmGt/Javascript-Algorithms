// 1. Basic formula approach
function convertToF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

// 2. Concise arrow function
const convertToFShort = (c) => c * 1.8 + 32;

console.log(`30°C to Fahrenheit: ${convertToF(30)}`);
console.log(`0°C to Fahrenheit: ${convertToFShort(0)}`);
