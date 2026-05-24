
// zadanie 1

// function reversedNumber(number: number) {
//     let reversedNumber = number.toString().split('').reverse().join('');

//     return Number(reversedNumber);
// }

// console.log(reversedNumber(1234));

// zadanie 6

// let myColor = ['Red', 'Green', 'White', 'Black'];

// function joinArrayElements(array: string[]) {
//     return console.log(array.join()), console.log(array.join()), console.log(array.join('+'))
// }

// joinArrayElements(myColor)

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

function repeat(string: string, n?: number) {
    
    if (n >= 2) {
        return string.repeat(n)
    } else return string

}