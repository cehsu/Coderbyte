function FirstFactorial(num) { 
var result = num;
if (result > 1) {
  for (var i = 1; i < num; i ++ ) {
    result *= (num - i);
  }
  
}
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());           
