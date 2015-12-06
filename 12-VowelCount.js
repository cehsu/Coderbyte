function VowelCount(str) { 
return str.replace(/[^a|e|i|o|u]/gi, "").length;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           
