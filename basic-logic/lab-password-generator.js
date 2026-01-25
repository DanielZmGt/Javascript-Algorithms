const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

const generatePassword = (long) => {
  let result = "";
  for (let i = 0; i < long; i++) {
    const randomCharIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomCharIndex];
  }
  return result;
};

const password = generatePassword(12);
console.log(`Generated password: ${password}`);
