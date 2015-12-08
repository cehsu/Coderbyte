function DashInsert(str) { 
str = str.split"";
  for (var i = 0; i < str.length-1; i ++ ) {
    if (str[i] % 2 === 1 && str[i+1] % 2 === 1) str.splice(i+1, 0, "-");
  }
  // code goes here  
  return str.join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());           
