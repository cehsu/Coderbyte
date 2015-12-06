function SimpleSymbols(str) { 
for (var i = 0; i < str.length-1; i ++ ) {
  if ((/[a-z]/gi.test(str[i]) && str[i+1] != "+") || (/[a-z]/gi.test(str[i])&& str[i-1] != "+")) {
    return false;
  }
}
  // code goes here  
  return true;
  
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());    
