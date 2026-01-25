const uniteUnique = (...args) => {
  let unique = [];

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!unique.includes(args[i][j])) {
        unique.push(args[i][j]);
      }
    }
  }
  return unique;
};
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
