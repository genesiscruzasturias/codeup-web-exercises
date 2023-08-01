// * TODO:
//     * Create a function named `analyzeColor` that accepts a string that is a color
// * name as input. This function should return a message which relates to the
// * color stated in the argument of the function. For colors you do not have
// * responses written for, return a string stating so
// *
// * Example:
// *  > analyzeColor('blue') // returns "blue is the color of the sky"
// *  > analyzeColor('red') // returns "Strawberries are red"
// *
// *
// *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
// *
// * You should use an if-else-if-else block to return different messages.
// *
// * Test your function by passing various string literals to it and
// * console.logging the function's return value

// let color = ["blue", "red", "cyan", "indigo", "yellow", "orange", "violet"]
//     function analyzeColor(color) {
//    if (color === "blue") {
//       return "The sky is blue.";
//    }
//    else if (color === "red") {
//       return "My son's favorite color is red.";
//    }
//    else if (color === "cyan") {
//       return("I dont know anything about cyan.");
//    }
//    else if (color === "violet") {
//        return("Violet is a pretty color.");
//    }
//    else if (color === "yellow") {
//        return("I'm not too fond of the color yellow.");
//    }
//    else if (color === "green") {
//        return("My mom's favorite color is green.");
//    }
//    else (color === "orange")
//        return("Oranges are also orange.")
// }
//
//  console.log(analyzeColor("blue"));
//  console.log(analyzeColor("red"));
// console.log(analyzeColor("green"));
//
 //
// // Don't change the next two lines!
// // These lines create two variables for you:
// // - `colors`: a list of the colors of the rainbow
// // - `randomColor`: contains a single random color value from the list (this
// //                  will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// console.log(randomColor);

// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
// function analyzeColor(color) {
//     switch(color) {
//         case "blue":
//             return "The sky is blue."
//         case "red":
//             return "Strawberries are red.";
//         case "cyan":
//             return "I dont know anything else about cyan."
//         case "violet":
//             return "Violet is very pretty."
//         case "green":
//             return "I have a green blanket."
//         case "indigo":
//             return "Indigo is a nice color."
//         case "yellow":
//             return "Yellow is a lively color."
//         default:
//             return "That's a nice color too."
//     }
// }
//
// console.log(analyzeColor(randomColor));


// * TODO:
//     * Prompt the user for a color when the page loads, and pass the input from the
// * user to your `analyzeColor` function. Alert the return value from your
// * function to show it to the user.

// let userColor = prompt("What is your favorite color?");
//
// alert(analyzeColor(userColor));

// * TODO:
//     * Suppose there's a promotion in Walmart, each customer is given a randomly
// * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// * everything for free!.
// *
// * Write a function named `calculateTotal` which accepts a lucky number and total
// * amount, and returns the discounted price.
// *
// * Example:
// * calculateTotal(0, 100) // returns 100
// * calculateTotal(4, 100) // returns 50
// * calculateTotal(5, 100) // returns 0
// *
// * Test your function by passing it various values and checking for the expected
// * return value.
//     */
//
// function calculateTotal(lucky, price) {
//    if (lucky === 0) {
//       return "Your total discount is: $" + price;
//    } else if (lucky === 1) {
//       return "Your total after discount is: $" + (price -(.10 * price))
//    } else if (lucky === 2) {;
//       return "Your total after discount is: $" + (price - (.25 * price));
//    } else if (lucky === 3) {
//       return "Your total after discount is: $" + (price - (.35 * price));
//    } else if (lucky === 4) {
//       return "Your total after discount is: $" + (price - (.50 * price));
//    } else if (lucky === 5) {
//        return "Your total with the discount applied is $" + (price - price);
//    }
// }
//
// console.log(calculateTotal(5, 30));
// console.log(calculateTotal(3, 150));
// console.log(calculateTotal(4, 459));
// console.log(calculateTotal(2, 4890));

// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
// // //
// let userTotal = prompt("What was the total of your bill?");
// // //
// alert(`Your lucky number is ${luckyNumber}`);
// alert(`Your price before discount was $${userTotal}`);
// alert(`${calculateTotal(luckyNumber, userTotal)}`);

// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */

let userConfirm = confirm("Would you be interested in entering a number?");
if (userConfirm) {
    let userNumber = prompt("Please enter a number:");

    if (!isNaN(userNumber)) {
        let parsedNumber = parseFloat(userNumber);

        let evenOrOddMessage = "";
        if (parsedNumber % 2 === 0) {
            evenOrOddMessage = "Even number!"
        } else {
            evenOrOddMessage = "Odd!"
        }
        // (parsedNumber % 2 === 0) ? "Your number is even!" : "Your number is odd!";
        alert(evenOrOddMessage);

        alert(`Your number plus 100 is: ${parsedNumber + 100}`);

        let positiveNegativeMessage = (parsedNumber >= 0) ? "That is a positive number!" : "That is a negative number!";
        alert(positiveNegativeMessage);
    } else {
        alert("Please enter a number.");
    }
}
