// Zadania:

// 1 Reverse Number
// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

// wykorzystane dodatkowo Number(), inaczej output jest stringiem

function reversedNumber(number) {
  let reversedNumber = number.toString().split("").reverse().join("");

  return Number(reversedNumber);
}

console.log(reversedNumber());

// 2 String Combinations
// Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

?wartości od 0 do < string.length()
potem od następnego indeksu zaczynać

// 3 Capitalize First Letter of Each Word // map() lub flatMap()
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '


jakiś sposób rozwiązania przy stringu z jednym słowem. Do stringu ze zdaniem przydałoby się(?) map() lub flatMap()

let słowo = 'szymon'
let tablica = słowo.split('') // [ 's', 'z', 'y', 'm', 'o', 'n' ]
singleLetter = tablica[0] // s (string)
singleLetter = singleLetter.toUpperCase() // S (string)
console.log(singleLetter) // S (string)
tablica.shift()
console.log(tablica) // [ 'z', 'y', 'm', 'o', 'n' ]
tablica.unshift(singleLetter)
console.log(tablica) // [ 'S', 'z', 'y', 'm', 'o', 'n' ]
let noweSłowo = tablica.join('')
console.log(noweSłowo)

// 4 Find Longest Word
// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// 5 First Elements of Array
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

próba rozwiązania:

// array1 = [7, 9, 0, -2] //     -> 7
// array2 = []             // 3    -> []
// array3 = [7, 9, 0, -2]  // 3    -> [7, 9, 0]
// array4 = [7, 9, 0, -2]  // 6    -> [7, 9, 0, -2]
// array5 = [7, 9, 0, -2]  // -3   -> []


function first (array, n) {
return array.splice(0,n)

}

// 6 Join Array Elements
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

"być może wymaga pętli, ale nie musi"?

let myColor = ['Red', 'Green', 'White', 'Black'];

function joinArrayElements(array) {
    return console.log(array.join()), console.log(array.join()), console.log(array.join('+'))
}

joinArrayElements(myColor)

// 7 Display Colors with Ordinals
// We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -

// 8 Find Element in Array
// Write a JavaScript function to find an array containing a specific element.
// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]

// 9 Check String Input
// Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

coś w rodzaju?:
typeof, isString, ===, ify, boolean

// 10 String to Array of Words
// Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]

function string_to_array(string) {
    return string.split(' ')
}

// 11 Repeat String
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Test Data :
// console.log(repeat('Ha!'));
// console.log(repeat('Ha!',2));
// console.log(repeat('Ha!',3));
// "Ha!"
// "Ha!Ha!"
// "Ha!Ha!Ha!"

// 12 Insert in String
// Write a JavaScript function to insert a string within a string at a particular position (default is 1).
// Test Data :
// console.log(insert('We are doing some exercises.'));
// console.log(insert('We are doing some exercises.','JavaScript '));
// console.log(insert('We are doing some exercises.','JavaScript ',18));
// "We are doing some exercises."
// "JavaScript We are doing some exercises."
// "We are doing some JavaScript exercises."

// 13 Chop String into Chunks
// Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

// 14 List Object Properties
// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

// 15 Delete Property
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// 16 Write a JavaScript program to get the length of a JavaScript object.
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

// 17 Display Reading Status
// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
// var library = [
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games',
//        readingStatus: false
//    }];

// 18 Book and Ebook Classes with Price
// Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details.

// 19 Animal and Dog Classes with Sound
// Write a JavaScript program that creates a class called 'Animal' with properties for species and sound. Include a method to make the animal's sound. Create a subclass called 'Dog' that inherits from the 'Animal' class and adds an additional property for color. Override the make sound method to include the dog's color. Create an instance of the 'Dog' class and make it make its sound.

// 20 Zadanie z budowy testów:
// Dla aplikacji TestArena Demo proszę przygotuj test zgodnie z podaną poniżej ścieżką:

// Warunki wstępne:
// Użytkownik znajduje się na stronie logowania do aplikacji

// Kroki wykonania:
// - Logowanie do aplikacji
// - Sprawdzenie czy użytkownik jest na stronie aplikacji, na stronie głównej
// - Przejście do opcji w menu: Baza testów
// - Dodanie testu do bazy testów
// - Wpisanie nazwy testu w wyszukiwarkę i kliknięcie w ikonę lupy

// Oczekiwany rezultat:
// Dodany wcześniej test jest widoczny na stronie aplikacji
