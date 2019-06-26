function AlphabetSoup(str) { 
    var chars = str.split("");
    var sorted = chars.sort();
    return sorted.join("");        
  }
     
  console.log(AlphabetSoup("yanitzin"));  