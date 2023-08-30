console.log("hello")
// counts everything by second ----- Set Interval

let count = 0;

let max = 10;

let interval = 1000; //interval time in milliseconds, between each running of code

let intervalId = setInterval(function () {
    if (count >= max) {
        clearInterval(intervalId);
        console.log("All done");
    } else {
        count++;
        console.log("Repeating this line " + count);
    }
}, interval)

//------setTimeout method

let delay = 5000; // delay time in milliseconds

let timeOutId = setTimeout(function (){
    alert("Here is a delayed hello!");
}, delay);