function DashInsert(str) { 
var result = "";
  for (var i = 0; i < str.length; i ++ ) { 
    result += str[i];
    if (i < str.length-1 && str[i]%2!=0 && str[i+1]%2!=0) result += "-";
  }
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());           
