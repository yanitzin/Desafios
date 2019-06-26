function LetterChanges(str) {    
    a = str.replace(/[a-z]/gi,remplazo);
    b = a.replace(/[aeiou]/gi,remplazo2)
  return b; 
}
function remplazo (match){
    return String.fromCharCode(match.charCodeAt(0) + 1);
} 
function remplazo2 (match){
    return match.toUpperCase();
}
console.log(LetterChanges("Bye"));