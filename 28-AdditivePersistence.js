function AdditivePersistence(num) { 
num = num.toString();
var count = 0;
  while (num.length > 1) {
    var sum = 0;
    count ++;
    for ( var i = 0; i < num.length; i ++ ) {
      sum += parseInt(num[i]);
    }
    num = sum.toString();
  }
  // code goes here  
  return count; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           
