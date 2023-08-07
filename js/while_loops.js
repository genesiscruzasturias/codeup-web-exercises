console.log("Hello!");

//While Loop
let i = 2, j = 65536;
while (i <= j) {
    console.log(i);
    i*=2;
}

//Do While Loop
//generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop
//inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients.
//Use a do-while loop to log to the console the amount of cones sold to each person.

let allCones = Math.floor(Math.random() * 50) + 50;


do {
    Math.floor(Math.random() * 5) + 1;
} while()

let totalCones = getRandomInt(50, 100);
let wanttoBuy;

do {
    wanttoBuy = getRandomInt(1, 5);

    if(wanttoBuy < totalCones){
        console.log("Customer wants to buy" + wanttoBuy)
    } else {

    }
    Math.floor(Math.random() * 5) + 1;
}while (totalCones >= 0);

//generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop
//inside of the loop your code should generate another random number between 1 and 5,simulating the amount of cones being bought by her clients
//Use a do-while loop to log to the console the amount of cones sold to each person.

l