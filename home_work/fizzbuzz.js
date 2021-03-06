// FIZZBUZZ
// Using loops, boolean logic, and if/else statements, incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.
//
// EX:
// 1
// 2
// 'fizz'
// 4
// 'buzz'
// 'fizz'
// 7
// 8
// 'fizz'
// 'buzz'

// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.
for(var i = 1; i <= 100; i++) {
 
//##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.
if (i % 3 === 0 && i % 5 ===0) {
  console.log('fizzbuzz');

// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.
}else if (i % 5 === 0) {
  console.log('buzz');


// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.
}else if (i % 3 === 0) {
  console.log('fizz');
  } else { 
    console.log(i);
}  
}

// I had to shuffle the pattern of if/else statements initially indicated in the directions, 
// removing the Step 2 'else' entirely,
// and moving the console log statement and ending curly bracket in Step 1 to the end.
// Suprisingly I had to put the divisible by 3 and 5 condition in the first 'if' because, 
//I suppose, the flow doesn't reverse and change those entries once they are logged, no?