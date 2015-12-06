function DivisionStringified(num1,num2) { 
var result = Math.round(num1 / num2).toString().split("");
  
    var i = -3;
    while (i + result.length > 0) {
      result.splice(i, 0, ",");
      i -= 4;
    }
  
  // code goes here  
  return result.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());           
