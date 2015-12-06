function MultiplicativePersistence(num) { 
num = num.toString();
var count = 0;
  while (num.length > 1) {
    var product = 1;
    count ++;
    for ( var i = 0; i < num.length; i ++ ) {
      product *= parseInt(num[i]);
    }
    num = product.toString();
  }
  // code goes here  
  return count; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           
