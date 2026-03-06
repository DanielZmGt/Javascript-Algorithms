export const countup = (number) => {

  if (number < 1) {
    return []};
 
    let arr = countup(number - 1);
    
    return [...arr, number];
  
}
console.log(countup(5));  

countup(5);
