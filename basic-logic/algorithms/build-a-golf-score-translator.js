
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
const golfScore = (par, strokes) => {
  let message = ('')
  if (strokes === 1) {
    message = names[0];
    } else if (strokes <= par - 2) {
      message = names[1];
      } else if (strokes <= par - 1) {
      message = names[2];
       } else if (strokes === par) {
         message = names[3]
       } else if (strokes === par + 1) {
         message = names[4]
       }  else if (strokes === par + 2) {
         message = names[5]
       }  else if (strokes >= par + 3) {
         message = names[6]
       }
       
    
    return message }

    
   


