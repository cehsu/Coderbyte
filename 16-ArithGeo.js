function ArithGeo(arr) { 
var arithFlag = true;
var geoFlag = true;
var arithDiff = [];
var geoDiff = [];

  for (var i = 0; i < arr.length -1; i ++ ) {
    arithDiff.push(arr[i+1]-arr[i]);
    geoDiff.push(arr[i+1]/arr[i]);
  }
  for (var j = 0; j < arithDiff.length -1 ; j ++ ) {
    if (arithDiff[j+1] != arithDiff[j]) arithFlag = false;
    if (geoDiff[j+1] != geoDiff[j]) geoFlag = false;
  }
  // code goes here  
  if (arithFlag) return "Arithmetic";
  else if (geoFlag) return "Geometric";
  else return -1; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());  
