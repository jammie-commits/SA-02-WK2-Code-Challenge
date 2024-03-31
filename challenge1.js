// Loop in between characters
function changeCase(str) {
    return str.split('').map(char => {
      // Convert lowercase to uppercase & uppercase to lowercase
      return String.fromCharCode(
        char === char.toLowerCase() ? char.toUpperCase().charCodeAt(0) : char.toLowerCase().charCodeAt(0)
      );
    }).join('');
  }
  
// output
  const text = "This is Code Challenge One";
  const convertedText = changeCase(text);
  console.log(convertedText); 