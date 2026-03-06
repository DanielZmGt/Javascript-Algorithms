/*export const whatIsInAName = (collection, source) => {
const sourceKeys = Object.keys(source);
return collection.filter(obj => {
  return sourceKeys.every(key => {
  return obj.hasOwnProperty(key) && obj[key] === source[key]
  });
});
};*/

export const whatIsInAName = (collection, source) => {
const sourcePairs = Object.entries(source);
return collection.filter(obj => {
return sourcePairs.every(([key, value]) => {
  return obj.hasOwnProperty(key) && obj[key] === value;
});
});
};




console.log(whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
))