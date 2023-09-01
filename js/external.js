console.log("Hello from external Javascript!");

// Use the alert function to show a message that says 'Welcome to my Website!'.
alert("Welcome to Gen's Website!");

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//
// For example, if the user enters "blue", your code should alert a message that says:
//
// "Great, blue is my favorite color too!"
let userInput = prompt("What is your favorite color of all time?");
alert("My favorite color is " + userInput + " too!");

// Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.
//
// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let littleMermaidPrice = 3;
let brotherBearPrice = 5;
let herculesPrice = 1;
let littleMermaidDays = 3;
let brotherBearDays = 5;
let herculesDays = 1;
let totalPaid = ((littleMermaidPrice * littleMermaidDays) + (brotherBearDays * brotherBearPrice) + (herculesDays * herculesPrice));
prompt("Do you know the total price of your 3 movie rentals?");
let userInput1 = alert("Your total price is " + totalPaid + " dollars!");
let googleRPH = 400;
let amazonRPH = 380;
let facebookRPH = 350;
let googleHoursWorked = 6;
let amazonHoursWorked = 4;
let facebookHoursWorked = 10;
let totalPay = ((googleRPH * googleHoursWorked) + (amazonRPH * amazonHoursWorked) + (facebookRPH * facebookHoursWorked));
prompt("How much do you think your 3 primary companies owe you?");
let userInput2 = alert("Your total pay is " + totalPay + " dollars! WOW!");
let twoItemsOrMore = true;
let offerNotExpired = true;
let premiumMembers = true;
prompt("Are you a premium member? Type Y for Yes/N for No.");
alert("If you are not a Premium member, the offer is valid if you buy 2 or more items AND if the offer has not expired!");
let classNotFull = true;
let nonconflictingSchedule = false;
prompt("Is your class full?");
prompt("Does the class schedule conflict with your own schedule?");
nonconflictingSchedule === (alert("We're sorry. You are unable to enroll."));