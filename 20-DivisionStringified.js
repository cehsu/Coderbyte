function DivisionStringified(num1, num2){
var result = Math.round(num1/num2).toString().split("");
  
  for (var i = -3; result.length + i > 0; i -= 4){
result.splice(i, 0, ",");
}
return result.join("");
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DivisionStringified(readline());           
