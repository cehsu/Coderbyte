function PowersofTwo(num) { 
while (num >= 1 ) {
  if (num == 1) return true;
  else return PowersofTwo(num/2);
}
  // code goes here  
  return false; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());           
