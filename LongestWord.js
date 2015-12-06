function LongestWord(sen) { 
 // code goes here  
  sen = sen.split(" ").sort(function (a, b){return b.replace(/[^a-z\s]/g, "").length -a.replace(/[^a-z\s]/g, "").length});
  return sen.shift();
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
