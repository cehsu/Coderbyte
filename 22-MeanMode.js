function MeanMode(arr){

var mean = function(array){
function plus(a, b){ return a+b;}
return array.reduce(plus)/array.length;
};

var mode = function (array){
var mode = arr[0];
var modecount = 0;
var  map = {};
for (var i = 0; i < array.length; i ++ ) {
map[array[i]] = map[array[i]]+1 || 1;
if (map[array[i]] > modecount){
modecount = map[array[i]];
mode = array[i];
}
}
return mode;
};

return mean(arr) == mode(arr);

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());       
