
function SimpleSymbols(str) { 
    var str = '=' + str + '=';
    for (var i = 0; i < str.length; i++) {
      if (str[i].match(/[a-z]/i) !== null) {
        if (str[i-1] !== '+' || str[i+1] !== '+') { 
          return false;
        }
      }
    }
    return true;
  }
  console.log(SimpleSymbols("+1+2+3+"));    