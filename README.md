# SA.02:WK2: Code Challenge
#### Date, 2024/03/31
#### By *James Mbugua*
## Description
Phase-1 Week-2 Code Challenge
### CHALLENGE ONE
#### Process
The function changeCase(str) works like this: 
It takes a string str as input.
Str.split(‘ ‘) breaks the string into individual characters, turning it into an array.
Using map(), it goes through each character in the array and does the following:
If the character is lowercase (char === char.toLowerCase()), it turns it into uppercase using char.toUpperCase().charCodeAt(0).
If the character is not lowercase (meaning it's uppercase or something else), it converts it to lowercase using char.toLowerCase().charCodeAt(0).
String.fromCharCode then changes the character code back to its corresponding character, either uppercase or lowercase.
After mapping, join('') combines the modified characters back into a string.
The function returns the newly created string with swapped cases.
#### Output
The output for this function, given a string, would be that all the uppercase letters become lowercase, and all the lowercase letters become uppercase. 
### CHALLENGE TWO
The getArray(begin, end) function does the following:
It takes two numbers, begin and end, as input.
First, it checks if begin is greater than end. If so, it swaps their values to make sure begin is smaller than end.
Using Array.from(), it creates an array with numbers starting from begin up to, but not including, end.
It generates each number in the array by adding begin to the current index.
The function then returns this array.
### CHALLENGE THREE
The getPrimes(numbers) function works as follows:
It takes an array of numbers, numbers, as input.
It creates an empty array called primes to store prime numbers.
It checks each number num in the numbers array.
If num is less than or equal to 1, it skips it because those are not prime numbers.
It efficiently handles divisibility by 2 by checking for even numbers (except 2 itself).
It uses a loop to check for divisibility by odd numbers up to the square root of num, because any composite number has factors that are less than or equal to its square root.
If num is divisible by any number in the loop, it's marked as not prime, and the loop stops.
If num is found to be prime after the loop, it's added to the primes array.
The function returns the primes array containing only the prime numbers from the original input array, keeping their order.
## Technologies used
      HTML
      JavaScript
