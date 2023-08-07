console.log("Hello!");


// TODO:
// Create an array of 4 people's names and store it in a variable called
// 'names'.
let names = ["Genesis", "Vicky", "Azariah", "Martha"];
// TODO:
// Create a log statement that will log the number of elements in the names
// array.
console.log("This is the number of elements: " + names.length + ".");
// TODO:
// Create log statements that will print each of the names individually by
// accessing each element's index.
console.log("Here is the first name: " + names[0]);
console.log("Here is the second name: " + names[1]);
console.log("Here is the third name: " + names[2]);
console.log("Here is the last name: " + names[3]);

for (let i = 0; i < names.length; i++) {
    console.log("The name at index " + i + " is: " + names[i] + ".");
}

// TODO:
// Write some code that uses a for loop to log every item in the names
// array.
for (let i = 0; i < names.length; i++) {
    console.log("Here are individual names using a for loop: " + names[i])
}
//
// TODO:
// Refactor your above code to use a `forEach` loop
//
names.forEach(function(name) {
    console.log("Here is a beautiful name using a forEach loop: " + name);
});

// * TODO:
// Create the following three functions, each will accept an array and
// return an an element from it
// first: returns the first item in the array
// second: returns the second item in the array
// last: returns the last item in the array
//
// Example:
//  > first([1, 2, 3, 4, 5]) // returns 1
//  > second([1, 2, 3, 4, 5]) // returns 2
//  > last([1, 2, 3, 4, 5]) // return 5

let numberArray = ["1", "2", "3", "4", "5"];
numberArray.forEach(function(number) {
    console.log("The first element is at index 0 and is: " + numberArray[0]);
});
numberArray.forEach(function(number) {
    console.log("The second element is at index 1 and is: " + numberArray[1]);
})
numberArray.forEach(function(number) {
    console.log("The last element is at index 4 and is: " + numberArray[4]);
});