function ExOh(str) { 
var xs = str.match(/x/gi);
var os = str.match(/o/gi);
  // code goes here  
  if (xs && os) {
  return (xs.length == os.length); 
  }
  else return false;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
