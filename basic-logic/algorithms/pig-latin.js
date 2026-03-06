// 1. Regex approach
export const translatePigLatin = (str) => {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

// 2. Alternative approach with vowel check
export const translatePigLatinAlt = (str) => {
  if (str.match(/^[aeiou]/)) return str + "way";
  const consonants = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonants.length) + consonants + "ay";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatinAlt("algorithm"));
console.log(translatePigLatin("paragraphs"));
