// 99 BOTTLES OF BEER
// Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal
// Make sure your program can handle both singular and plural cases (i.e. both "99 bottles of beer" and "1 bottle of beer")
// Hint: you will want to use a for loop that starts at 99 and counts down to 0
//for (i = 99; i >= 0; i --)
var one = (" bottle ");
for (var beer = 99; beer >= 0; beer--) 
  if(beer >=2){
    console.log(beer + " bottles of beer on the wall. " + beer + " bottles of beer. Take one down and pass it around, " + (beer-1) 
      + " bottles of beer on the wall.");
  }
  else if (beer === 1) {
    console.log(beer + one + " of beer on the wall. " + beer + one + " of  beer. Take one down and pass it around, " + (beer-1) + " bottles of beer on the wall."); 
  } 
  else (beer === 0); {
    console.log((beer+1) + " bottles of beer on the wall. " + (beer+1) + " bottles of beer. Go to the store and buy some more. 99 bottles of beer on the wall."); 
  }
