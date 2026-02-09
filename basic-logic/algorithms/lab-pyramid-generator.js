
const pyramid = (character, rowsCount, inverted) => {
const rows = []

for (let i = 1; i <= rowsCount; i++) {
const spaceCount = rowsCount - i;
const charCount = 2 * i - 1;
const padding = " ".repeat(spaceCount)
const block = character.repeat(charCount)
rows.push(padding + block)
 }
 if (inverted)  {rows.reverse()
 }
 return "\n" + rows.join("\n") + "\n" 
};
console.log(pyramid("x", 5, true))


