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

// zadanie 12
// Insert in String
// Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."


// problem z zerem


// function insert(string: string, additionalString?: string, position?: number) {

//     let newString


//     if (additionalString === undefined) {
//         newString = string
//     } else if (position === undefined || position == 0) {
//         newString = additionalString + string
//     } else if (additionalString === undefined && position === undefined) {
//         newString = string
//     } else {
//         newString = string.slice(0, position) + additionalString + string.slice(position)
//     }


//     console.log(newString)

// }

// zadanie 13
// Chop String into Chunks
// Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// function string_chop(string: string, size?: number) {

//     // if (size === undefined) {
//     //     size = 0
//     // }

//     let nowaTablica = string.split('')
//     let docelowaTablica = []

//     for (size; nowaTablica.length > 0;) {

//         let część = nowaTablica.splice(0, size).join('')
//         docelowaTablica.push(część)
//     }

//     return docelowaTablica

// }

// zadanie 14
// List Object Properties
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno


// let result = Object.keys(student).join()

// zadanie 15
// Delete Property
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// console.log(student)
// delete student['rollno']
// console.log(student)

// zadanie 16
// Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// let objectSize = Object.keys(student).length

// console.log(objectSize)

// zadanie 17
// Display Reading Status
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// var library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];

// wariant 1 - filter()

// function reading(readingStatus: boolean) {
//     let status

//     if (readingStatus) {
//         status = library.filter(book => book.readingStatus)
//     } else {
//         status = library.filter(book => book.readingStatus === false)
//     }
//     return console.log(status)

// }

// reading(true)

// wariant 2 - funkcja, if, pętla, odczytywanie z tablicy, porównywanie wartości, push()

// function newReading(readingStatus: boolean) {

//     let results: any[] = [];

//     if (readingStatus) {
//         for (let i = 0; i < library.length; i++) {
//             if (library[i].readingStatus) {
//                 results.push(library[i])
//             }
//         }

//     } else {
//         for (let i = 0; i < library.length; i++) {
//             if (library[i].readingStatus === false) {
//                 results.push(library[i])
//             }
//         }
//     }

//     return console.log(results)
// }

// newReading(true)

// wariant 3 - forEach, odczytywanie z tablicy, porównywanie wartości

// function newReading2(readingStatus: boolean) {

//     library.forEach(object => {

//         if (object.readingStatus === readingStatus) {
//             console.log(object)
//         }

//     })

// }

// newReading2(false)

// zadanie 18
// Book and Ebook Classes with Price
// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

// class Book {

//     title: string
//     author: string
//     publicationYear: number

//     constructor(title: string, author: string, publicationYear: number) {

//         this.title = title
//         this.author = author
//         this.publicationYear = publicationYear

//     }

//     displayBookDetails() {
//         console.log('title: ' + this.title + ', author: ' + this.author + ', publication year: ' + this.publicationYear)
//     }

// }

// class Ebook extends Book {

//     price: number

//     constructor(title: string, author: string, publicationYear: number, price: number) {
//         super(title, author, publicationYear)
//         this.price = price
//     }

//     displayBookDetails() {
//         console.log('title: ' + this.title + ', author: ' + this.author + ', publication year: ' + this.publicationYear + ', price: ' + this.price)
//     }

// }

// let book1 = new Ebook('Wiedźmin', 'Sapkowski', 1999, 90.99)
// book1.displayBookDetails()

// zadanie 19
// Animal and Dog Classes with Sound
// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

// class Animal {
//     species: string
//     sound: string

//     constructor (species: string, sound: string) {
//         this.species = species
//         this.sound = sound
//     }

//     makeSound() {
//         console.log('The animal is making noises.')
//     }
// }

// class Dog extends Animal {
//     color: string

//     constructor(species: string, sound: string, color: string) {
//         super(species, sound)
//         this.color = color
//     }

//     makeSound() {
//         console.log("The " + this.color + " dog is barking.")
//     }
// }

// let dog1 = new Dog ('Affenpinscher', 'barking', 'brown')
// dog1.makeSound()

