function ABCheck(str) { 
for (var i = 0; i < str.length; i ++ ) {
  if ((str[i] == "a" && str[i+4] == "b") || (str[i] == "A" && str[i+4] == "B") || (str[i] == "a" && str[i+4] == "B") || (str[i] == "A" && str[i+4] == "b")) {
    return true;
  }
}
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());           
