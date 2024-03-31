// function primeNumbers
function getPrimes(numbers) {
    const primes = [];
  
    // Iterate Through Numbers
    for (const num of numbers) {
      if (num <= 1) continue;
  
      // Check for divisibility by 2 
      if (num % 2 === 0 && num !== 2) continue;
  
      // loop iteration 
      let isPrime = true;
      const limit = Math.sqrt(num);
      for (let i = 3; i <= limit; i += 2) {
        if (num % i === 0 || num % (i + 2) === 0) {
          isPrime = false;
          break;
        }
      }
        // Add Prime Numbers
      if (isPrime) {
        primes.push(num);
      }
    }
  
    return primes;
  }
  
 // output
  const numberArray = [50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
  const primeNumbers = getPrimes(numberArray);
  console.log(primeNumbers); 
  