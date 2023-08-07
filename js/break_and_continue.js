console.log("Hi!")

//Prompt the user for an odd number between 1 and 50.
// Use a loop and a break statement to continue prompting the user if they enter invalid input.
//Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.

let userNumber = prompt("Please enter an odd number between 1 and 50.")
// console.log("User entered " + userNumber + " which is odd.")
for(let i = 0; i <= 50; i++) {
    if (userNumber == i) {
        console.log("Skipping " + userNumber)
        continue;
    } if (i % 2 !== 0) {
        console.log("Here is an odd number: " + i)
    } if (userNumber % 2 === 0) {
        parseInt(prompt("That is not an odd number! Please enter an odd number!"))
        console.log("User entered an even number.")
        break;
    }
    if (isNaN(userNumber)) {
        parseInt(prompt("Please enter a valid number."))
        console.log("User entered invalid input.")
        break;
    }
}
