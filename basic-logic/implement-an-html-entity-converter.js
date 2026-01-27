const convertHTML = str => {
 const char = {
   "&": "&amp;",
   "<": "&lt;",
   ">": "&gt;",
   '"': "&quot;",
   "'": "&apos;"
 }
  return str.split("").map(item => char[item] || item).join("")

}

console.log(convertHTML("Dolce & Gabbana"));
