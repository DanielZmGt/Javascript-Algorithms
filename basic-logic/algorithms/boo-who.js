// 1. Basic approach using typeof
export const booWho = (bool) => {
  return typeof bool === "boolean";
}

// 2. Alternative approach using strict equality with true or false (less idiomatic for all types)
// But we want multiple ways. 

console.log(`Is true a boolean? ${booWho(true)}`);
console.log(`Is "true" a boolean? ${booWho("true")}`);
console.log(`Is null a boolean? ${booWho(null)}`);
