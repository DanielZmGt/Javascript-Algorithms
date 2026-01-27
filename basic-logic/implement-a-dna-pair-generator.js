const pairElement = (arg) => {
  const pairs = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  return arg.split("").map(char => [char, pairs[char]])
}

console.log(pairElement("ATCGA"));
