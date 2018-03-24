/*
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * (i.e) console.log("Question 1" + q1)
 */

/*
 * Question 1
 * Create an array of image source filenames.
 * Use "image1.png", "image2.png", and "image3.png" as the array values.
 */
var q1 = ['image1.png', 'image2.png','image3.png'];
console.log('Question 1 ' + q1);
// Your code here

/*
 * Question 2
 * Using the array from Question 1, store the first element of the array
 * in variable q2.
 */

// Your code here
var q2 = q1[0];
console.log('Question 2 ' + q2);
/**
 * Question 3
 * Get the length of the first array (number of elements in the array)
 * and store it in variable q3
 */

// Your code here
var q3 =q1.length;
console.log ('Question 3 ' + q3);
/*
 * Question 4
 * Using the array from Question 1, store the last element of the array
 * in variable q4. Hint: How can we get the number of elements in the array?
  I don't understand the hint about numbers given that I'm storing an element
  which is a string*/


// Your code here
var q4 = q1[2];
console.log('Question 4 ' + q4);
// ____________________________________________________________________________

/*
 * Arrays + Iteration
 */

/*
 * Question 5
 * Create an array of numbers using 1, 2, 3, and 4 as values.
 * Use the .forEach() or .map() array methods to increase each value by 1.
 * You can either store each new value back in the original
 * array, or in a new array -- your choice. The end result should be
 * an array of numbers with values 2, 3, 4, and 5.
 */

// Your code here
var numbers = [1,2,3,4];
var numPlusOne = numbers.map(function (num) { return num +1
})
var numbers = numPlusOne;
console.log('Question 5 ' + numbers)

var difArray = numPlusOne;
console.log('different array called difArray  '+ difArray)
  // body...


/*
 * Question 6
 * Using the array from Question 5, find the average of the numbers in the array
 * (average = sum of all numbers/number of numbers). Store the average in q6.
 */


// Your code here
var numbers = [2,3,4,5,]
var tot = numbers[0]+numbers[1]+numbers[2]+numbers[3];
var q6 = tot/4
console.log('Question 6 ' + q6)