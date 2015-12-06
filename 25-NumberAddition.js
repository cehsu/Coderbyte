function NumberAddition(str) { 
str = str.replace(/[^0-9]/g, " ").split(" ");
var sum = 0;  
  for (var i = 0; i < str.length; i ++ ) {
    if (/[0-9]/g.test(str[i]))
    sum += parseInt(str[i]);
  }
  // code goes here  
  return sum; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());           
