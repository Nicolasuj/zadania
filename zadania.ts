// zadanie 1

// Reverse Number
// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// function reversedNumber(number: number) {
//     let reversedNumber = number.toString().split('').reverse().join('');

//     return Number(reversedNumber);
// }

// console.log(reversedNumber(1234));

// zadanie 2

// String Combinations
// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// wariant 1

// function stringCombination (string: string) {
//     console.log(string[0] + ',' + string.slice(0,2) + ',' + string + ',' + string[1] + ',' + string.slice(1) + ',' + string[2])
// }

// stringCombination('dog')

// wariant 2

// function generateCombinations(string: string) {
//   let combinations = [];

//   for (let i = 0; i < string.length; i++) {

//     for (let j = i + 1; j <= string.length; j++) {
//       combinations.push(string.slice(i, j))
//     }

//   }

//   return combinations.join(',');
// }

// console.log(generateCombinations('dog'));

// zadanie 3

// Capitalize First Letter of Each Word // map() lub flatMap()
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// wariant 1

// let text: string = 'the quick brown fox'
// text = text.replace('t', 'T').replace('q', 'Q').replace('b', 'B').replace('f', 'F')

// console.log(text)

// wariant 2

// function capitalize (text: string) {
//     let newText = text.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ')
//     console.log(newText)

// }

// capitalize()

// zadanie 4

// Find Longest Word
// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// ??

// function longestWord (string: string) {

//     return longestWord
// }

// longestWord()

// zadanie 5

// First Elements of Array
// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// function first(array: any[], n?: number) {
//     if (n === undefined) return array[0]

//     return array.splice(0, n);
// }

// zadanie 6

// let myColor = ['Red', 'Green', 'White', 'Black'];

// function joinArrayElements(array: string[]) {
//     return console.log(array.join()), console.log(array.join()), console.log(array.join('+'))
// }

// joinArrayElements(myColor)

// zadanie 7

// Display Colors with Ordinals
// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."

// let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]
// let o = ["th","st","nd","rd"]

// console.log(`1${o[1]} choice is ${color[0]}.`)
// console.log(`2${o[2]} choice is ${color[1]}.`)
// console.log(`3${o[3]} choice is ${color[2]}.`)

// zadanie 8

// Find Element in Array
// Write a JavaScript function to find an array containing a specific element.
// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]

// function contains (array: any[], element: any) {
//     return array.includes(element)
// }

// const contains = (array: any[], element: any) => array.includes(element)

// zadanie 9
// Check String Input
// Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

// function is_string (input) {
//     if (typeof(input) == 'string') {
//         return true
//     } else return false
// }

// zadanie 10
// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

// function string_to_array(string: string) {
//     return console.log(string.split(' '))
// }

// string_to_array('Robin Singh')

// zadanie 11
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

// function repeat(string: string, n?: number) {

//     if (n >= 2) {
//         return string.repeat(n)
//     } else return string

// }
