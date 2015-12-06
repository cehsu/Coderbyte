function LetterChanges(str) { 
var result = [];
  for (var i = 0; i < str.length; i ++ ) {
    if (/[^a-z]/gi.test(str[i])) {
      result.push(str[i]);
    }
    else if (str[i] == "z" || str[i] == "Z") {
      result.push("A");
    }
    else {
      result.push(String.fromCharCode(str[i].charCodeAt() + 1));
    }
    if (/a|e|i|o|u/gi.test(result[i])) {
      result[i] = result[i].toUpperCase();
    }
  }
  // code goes here  
  return result.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());         
