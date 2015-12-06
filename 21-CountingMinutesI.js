function CountingMinutesI(str) { 
var times = str.split("-");
var time1 = times[0];
var time2 = times[1];
var time1h = parseInt(time1.split(":")[0]);
var time2h = parseInt(time2.split(":")[0]);
var time1m = parseInt(time1.split(":")[1].replace(/[^0-9]/g, ""));
var time2m = parseInt(time2.split(":")[1].replace(/[^0-9]/g, ""));
var time1ap = time1.split(":")[1].replace(/[0-9]/g, "");
var time2ap = time2.split(":")[1].replace(/[0-9]/g, "");
  
if (time1ap != time2ap) time2h+=12;
else if ((time1h >= time2h) && (time1m >= time2m)) time2h += 24;
  

  
  // code goes here  
  return (time2h*60+time2m) - (time1h*60+time1m); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
CountingMinutesI(readline());           
