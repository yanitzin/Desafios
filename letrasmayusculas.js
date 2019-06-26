function LetterCapitalize(str) { 
    return str.replace(/\b[a-z]/gi, function(char) { 
      return char.toUpperCase();
    });         
  }
  console.log(LetterCapitalize("hola como estan"));    