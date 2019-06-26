function LongestWord(palabra){ 

    var palabra='Hola soy Yanitzin';
    var hallado = palabra.match(/[A-Za-z0-9]+/gi);
    var ordenar = hallado.sort(function(a, b)
    { return b.length - a.length; });
    return ordenar[0]; 
  }

  console. log(LongestWord());
