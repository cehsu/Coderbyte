function LetterCountI(str) { 
var mcount = 0;
var mword = "";
str = str.split(" ");
  for (var i = 0; i < str.length; i ++ ) {
    var word = str[i];
    var map = {};
    for (var j = 0; j < word.length; j ++ ) {
      map[word[j]] = map[word[j]] + 1 || 1;
      if (map[word[j]] > mcount) {
        mcount = map[word[j]];
        mword = word;
      }
    }
  }
  if (mcount > 1) return mword;
  else  return -1;
 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());   
