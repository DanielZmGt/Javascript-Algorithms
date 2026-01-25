const sumAll = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return (max - min + 1) * (min + max) / 2;
};
