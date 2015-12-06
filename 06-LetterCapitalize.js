function LetterCapitalize(str) { 
str = str.split(" ");
  for (var i = 0; i < str.length; i ++ ) {
    str[i] = str[i].split("");
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join("");
  }
  return str.join(" ");
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
