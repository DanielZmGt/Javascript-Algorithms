
/*const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
   
   if (func(item) === true)  {
     return item
   } 

  }
  return undefined
};*/

const findElement = (arr, func) => {
 return arr.find(func); 
 };   




