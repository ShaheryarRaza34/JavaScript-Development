/*
Convert the given number into a roman numeral.
*/

function convertToRoman(num) {
  var lookup={
    1:"I",
    4:"IV",
    5:"V",
    9:"IX",
    10:"X",
    40:"XL",
    50:"L",
    90:"XC",
    100:"C",
    400:"CD",
    500:"D",
    900:"CM",
    1000:"M"
}
let result ="";
let keys = Object.keys(lookup).reverse();

let diff=num;
while(diff>0){
  if(diff in lookup)
  {
    result=result+lookup[diff];
    diff=0;
  }
  else{
    for(var i =0; i<keys.length;i++)
  {
    if(diff>keys[i] )
    {
      result=result+lookup[keys[i]];
      
      break;
      
    }
    else{
      continue;
    }
  }
  diff=diff-keys[i];
  }
    
}

 return result;
}