
const lunches = []
  
  const addLunchToEnd = (arr, item) => {
  arr.push(item);
console.log(`${item} added to the end of the lunch menu.`);
  return arr
  }

  const addLunchToStart = (arr, item) => {
  arr.unshift(item);
console.log(`${item} added to the start of the lunch menu.`);
  return arr
  }

  const removeLastLunch = (arr) => {if (arr.length > 0) {
console.log(`${arr.pop()} removed from the end of the lunch menu.`);
} else console.log("No lunches to remove.")
  return arr
  };

   const removeFirstLunch = (arr) => {if (arr.length > 0) {
console.log(`${arr.shift()} removed from the start of the lunch menu.`);
} else console.log("No lunches to remove.")
  return arr
  }

   const getRandomLunch = (arr) => {if (arr.length > 0)
     {
     const randomIndex = Math.floor(Math.random() * arr.length); 
     console.log(`Randomly selected lunch: ${arr[randomIndex]}`)
      return arr[randomIndex];
     } else console.log("No lunches available.");
   }

     const showLunchMenu = (arr) => {
       if (arr.length > 0) {console.log(`Menu items: ${arr.join(', ')}`)} else console.log("The menu is empty.")
     } 


