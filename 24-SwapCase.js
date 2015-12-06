function SwapCase(str) { 
var result = "";
  for (var i = 0; i < str.length; i ++ ) {
    if (/[a-z]/g.test(str[i]))
        result += str[i].toUpperCase();
    else if (/[A-Z]/g.test(str[i]))
      result += str[i].toLowerCase();
    else result += str[i];
  }
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
