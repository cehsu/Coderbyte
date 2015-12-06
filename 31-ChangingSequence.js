function ChangingSequence(arr) { 
var pattern = [];
var result = -1;
  for (var i = 0; i < arr.length-1; i ++) {
    if (arr[i]< arr[i+1]) pattern.push("up");
    else pattern.push("down");
  }
  for (var j = 0; j < pattern.length-1; j ++ ) {
    if (pattern[j] != pattern[j+1]) result = j+1;
  }
  // code goes here  
  return result; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ChangingSequence(readline());           
