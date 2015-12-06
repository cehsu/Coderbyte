function OffLineMinimum(strArr) { 
var array = [];
var result = [];
  for (var i = 0; i < strArr.length; i ++ ) {
    if (strArr[i] == "E") result.push(array.pop());
    else array.push(strArr[i]);
    array = array.sort(function (a, b){return b-a});
  }
  // code goes here  
  return result.join(); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OffLineMinimum(readline());           
