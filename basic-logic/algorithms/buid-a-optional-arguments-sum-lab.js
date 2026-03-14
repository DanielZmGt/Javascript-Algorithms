const addTogether = (...args) => {
  const [first, second] = args;

  // Type check helper
  if (typeof first !== 'number') return undefined;

  // Case 1: Two arguments
  if (args.length > 1) {
    return typeof second === 'number' ? first + second : undefined;
  }

  // Case 2: One argument (return a new function)
  return (next) => typeof next === 'number' ? first + next : undefined;
};