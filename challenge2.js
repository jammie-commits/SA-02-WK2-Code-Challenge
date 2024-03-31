// function getArray
function getArray(begin, end) {
    if (begin > end) {
      [begin, end] 
    }
  
    // Create the array using Array.from() 
    return Array.from({ length: end - begin + 1 }, (_, i) => begin + i);
  }
  
// output
  const beginNum = 50;
  const endNum = 100;
  const numbersArray = getArray(beginNum, endNum);
  console.log(numbersArray); 
  