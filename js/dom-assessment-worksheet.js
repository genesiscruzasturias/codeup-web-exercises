// TODO: Target the div with the id of deep-in-the-heart. When the div is clicked, spawn an alert that says "CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~".
var listener = function (event) {
    alert('CLAPCLAPCLAPCLAPCLAP - Deep in the Heart of Texas!~');
}
document.getElementById('deep-in-the-heart').addEventListener('click', listener);

//TODO: Target the div with the id of what-color - when the div is clicked, the value of the color from that div should be populated as a string into the div#answer-color.
let whatColor = document.getElementById("what-color");
let outputDiv = document.getElementById("answer-color");

whatColor.addEventListener("dblclick", function () {
    let color = window.getComputedStyle(whatColor).getPropertyValue("color");
    outputDiv.textContent = "color:" + color;
})

// TODO: When the user clicks the button#tacoButton, the value typed into the input#tacoBoutIt will be populated into the span#favorite-taco. Our goal is for our user to be able to type what kind of tacos they like to get and see that value where "*replaceMe" is.
// let tacoBoutIt = document.getElementById("tacoBoutIt");
// let outputSpan = document.getElementById("favorite-taco");
//
// tacoButton.addEventListener("click", function () {
//     let color = window.getComputedStyle(tacoBoutIt)
//     outputDiv.textContent = "color:" + favorite-taco;
// })

// TODO: When a list item from the ul#list-states is hovered over, populate the span#insert-state with the value of the specific state-list-item hovered over to complete the sentence.

//TODO: Five seconds after the page loads, insert a string with the message "Oh, hey, didn't see you there" into the div#five-seconds.