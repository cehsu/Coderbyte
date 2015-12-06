function SecondGreatLow(arr) { 
arr = arr.sort(function (a, b){return a - b});
for (var i = arr.length-1; i > 0; i -- ) {
  if (arr[i] == arr[i-1]) arr.splice(i, 1);
}
  
  // code goes here  
  return arr[1] + " " + arr[arr.length-2]; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());           
