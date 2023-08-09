"use strict";
console.log("Hello, welcome to objects!");

// TODO:
// Create an object with firstName and lastName properties that are strings
// with your first and last name. Store this object in a variable named
// `person`.
// Example:
//  > console.log(person.firstName) // "Rick"
//  > console.log(person.lastName) // "Sanchez"

let person = {};
person.firstName = "Genesis";
person.lastName = "Cruz Asturias";

console.log(person.firstName);
console.log(person.lastName);

// TODO:
// Add a sayHello method to the person object that returns a greeting using
// the firstName and lastName properties.
// console.log the returned message to check your work
//
//  Example
//  > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
person.sayHello = function () {
    console.log("Hello from " + person.firstName + " " + person.lastName + ".");
}
person.sayHello();

// TODO:
// HEB has an offer for the shoppers that buy products amounting to
// more than $200. If a shopper spends more than $200, they get a 12%
// discount. Write a JS program, using conditionals, that logs to the
// browser, how much Ryan, Cameron and George need to pay. We know that
// Cameron bought $180, Ryan $250 and George $320. Your program will have to
// display a line with the name of the person, the amount before the
// discount, the discount, if any, and the amount after the discount.
// Uncomment the lines below to create an array of objects where each object
//  represents one shopper. Use a foreach loop to iterate through the array,
//  and console.log the relevant messages for each person
//
 var shoppers = [
 {name: 'Cameron', amount: 180},
 {name: 'Ryan', amount: 250},
 {name: 'George', amount: 320} ]

shoppers.forEach(shopper => {
    let discountApplied = false;
    let discountedPrice = shopper.amount;
    console.log(`The price before discount is applied is: $${shopper.amount.toFixed(2)}`);
    if (shopper.amount >= 200) {
        discountedPrice = (shopper.amount * .88)
        discountApplied = true;
    } if (shopper.amount >= 200 && discountApplied === true) {
        console.log(`The price after the 12% discount is: $${discountedPrice.toFixed(2)}`);
        } else {
        console.log("No discount applied.")
    }
})

// TODO:
// Create an array of objects that represent books and store it in a
// variable named `books`. Each object should have a title and an author
// property. The author property should be an object with properties
// `firstName` and `lastName`. Be creative and add at least 5 books to the
// array
//
// Example:
// > console.log(books[0].title) // "The Salmon of Doubt"
// > console.log(books[0].author.firstName) // "Douglas"
// > console.log(books[0].author.lastName) // "Adams"
//
let books = [
    {
        title: "The Mountain is You",
        author: "Brianna Wiest",
    },
    {
      title: "The Power of Now",
      author: "Eckhart Tulle",
    },
    {
      title: "The 48 Laws of Power",
      author: "Robert Greene",
    },
    {
      title: "The Laws of Human Nature",
      author: "Robert Greene",
    },
    {
      title: "Become What You Are",
      author: "Alan Watts"
    }
]
console.log("My first favorite book is " + books[0].title + " by " + books[0].author + ".");
console.log("My second favorite book is " + books[1].title + " by " + books[1].author + ".");
console.log("Another book I really enjoy but have not finished yet is " + books[2].title + " by " + books[2].author + ".");
console.log("I really enjoy reading books by " + books[3].author + " so here is another book by him: " + books[3].title);
console.log("Another great read is " + books[4].title + " by " + books[4].author + ".");

// ODO:
//  Loop through the books array and output the following information about
//  each book:
//  * - the book number (use the index of the book in the array)
//  * - the book title
//  * - author's full name (first name + last name)
//  *
//  * Example Console Output:
//  *
//  *      Book # 1
//  *      Title: The Salmon of Doubt
//  *      Author: Douglas Adams
//  *      ---
//  *      Book # 2
//  *      Title: Walkaway
//  *      Author: Cory Doctorow
//  *      ---
//  *      Book # 3
//  *      Title: A Brief History of Time
//  *      Author: Stephen Hawking
//  *      ---
//  *      ...
let newBooks = [
    {
        index: 0,
        title: "The Salmon of Doubt",
        author: "Douglas Adams",
    },
    {
        index: 1,
        title: "Walkaway",
        author: "Cory Doctorow",
    },
    {
        index: 2,
        title: "A Brief History of Time",
        author: "Stephen Hawking",
    }
]
for (let i = 0; i < newBooks.length; i++){
    console.log(newBooks[i]);
}

// Bonus:
// Create a function named `createBook` that accepts a title and author
// name and returns a book object with the properties described
// previously.
function createBook(title, author) {
    return{
        title: title,
        author: author
    }
}
console.log(createBook("The Salmon of Doubt", "Douglas Adams"));
console.log(createBook("Walkaway", "Cory Doctorow"));
console.log(createBook("A Brief History of Time", "Stephen Hawking"));
// Refactor your code that creates the books array to instead
// use your function.
let booksArray = [
    {
        title: "The Salmon of Doubt",
        author: "Douglas Adams",
    },
    {
        title: "Walkaway",
        author: "Cory Doctorow",
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
    }
]
console.log("************** Some space. *****************")
booksArray.forEach(function(author, title) {
    console.log(author, title);
})

// Create a function named `showBookInfo` that accepts a book object and
// outputs the information described above. Refactor your loop to use your
// ``showBookInfo` function.
