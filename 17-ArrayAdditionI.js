function ArrayAdditionI(arr) { 
var largest = arr.sort(function (a,b){return a-b}).pop();

  
  function recursion (target, array) {
  if (array.length == 0) return target == 0;
  var n = array[0];
  array = array.slice(1);
  return recursion (target, array) || recursion (target-n, array);
}
  // code goes here  
  return recursion(largest, arr); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArrayAdditionI(readline());           
