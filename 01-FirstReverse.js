function FirstReverse(str) { 
str = str.split("");
  for (var i = 0; i <Math.floor(str.length/2); i ++ ) {
    var temp = str[i];
    str[i] = str[str.length-1-i];
    str[str.length-1-i]=temp;
  }
  // code goes here  
  return str.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());           
