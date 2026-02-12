const spinalCase = (str) => {
  return str
    .split(/\s+|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase()
    .replace(/^-/, ""); 
};

console.log(spinalCase("thisIsSpinalTap"))
