// 1. Basic approach using for loop
export const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

  for (let elem in arr) {
    const orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[elem].avgAlt, 3) / GM)
    );
    newArr.push({ name: arr[elem].name, orbitalPeriod: orbitalPer });
  }

  return newArr;
}

// 2. Functional approach using map
export const orbitalPeriodMap = (arr) => {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + avgAlt, 3) / GM)
    );
    return { name, orbitalPeriod };
  });
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(orbitalPeriodMap([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));
