function MeanMode(arr) { 
var modecount = 1;
var mode = arr[0];
var sum = 0;
var modeMap = {};
  for (var i = 0; i < arr.length; i ++ ) {
    sum += arr[i];
    modeMap[arr[i]] = modeMap[arr[i]] + 1 || 1;
    if (modecount < modeMap[arr[i]]) {
      modecount = modeMap[arr[i]];
      mode = arr[i];
    }
  }
  
  // code goes here  
  if( mode == (sum/arr.length))
    return 1;
  else
    return 0;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());       
