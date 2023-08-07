console.log("Hello, Genesis!")


//Exercise 2:
let n = 7;
for (let i = 1; i <= 10; ++i)
    console.log(n + " * " + i + " = " + n * i);
//
// //Exercise 3:
// //generate 10 random numbers between 20 and 200
// //output to the console whether each number is odd or even
//
// let randomNumber = Math.floor(Math.random() * 200) + 20;
// console.log(randomNumber)
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 200) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even!");
    } else {
        console.log(randomNumber + " is odd!");
    }
}
//
//Exercise 4:
//Create a for loop that uses console.log to create the output shown below.
//1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
let number = 9; //height of pattern
let string = ""
//External Loop
for (let i = 1; i <= number; i++) {
    //Internal Loop
    for (let j = 1; j <= i; j++) {
        string += i;
    }
    string += "\n";
}
console.log(string);
//
//
//Exercise 5
//Create a for loop that uses console.log to create the output shown below.
//100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5
for (let i = 100; i >= 5; i-=5) {
    console.log(i);
}