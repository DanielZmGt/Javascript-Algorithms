
//const confirmEnding = (str, strEnd) => {if (str.slice(str.length - strEnd.length) === strEnd) return true}//
const confirmEnding = (str, strEnd) => {
  return str.slice(str.length - strEnd.length) === strEnd;
}


