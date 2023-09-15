console.log("hi")
//TODO: When the h1#double-click is double clicked, change the inner text of the H1 from "Prepare for trouble. . ." to ". . . and make it double!"
const click = document.querySelector("h1");

click.addEventListener("dblclick", (e) => {
    click.innerText = '. . . and make it double!';
});

//TODO: As the user types into the input#input,  the div#printHere should display each individual character typed as it was typed into the input.

//TODO: When a paragraph.loremPara is clicked, that particular paragraph element's background color and font color should change to colors of your choice - note that only the ONE paragraph that was clicked should have that happen, not all paragraphs in the class.
const clickTwo = document.querySelector("p.loremPara");

clickTwo.addEventListener("click", (e) => {
    clickTwo.style.backgroundColor = "red";
});
//TODO: When the div#carSales is clicked, change the location of the user from the worksheet to https://www.lingscars.com/
const clickThree = document.querySelector("#carSales");

clickThree.addEventListener("click", (e) => {
    window.location.replace(
        "https://www.lingscars.com/");
});

//TODO: When the paragraph#question-request is hovered over, write a question in a string to appear in the paragraph#question-delivered - this question should disappear when the mouse leaves the area of paragraph#question-request

document.getElementById("question-request").onmouseover = function() {mouseOver()};
document.getElementById("question-request").onmouseout = function() {mouseOut()};

function mouseOver() {/*from   ww w.j  a v a2  s .c o m*/
    document.getElementById("question-request").innerText = "What's your question, sir?";
}

function mouseOut() {
    document.getElementById("question-request").innerText = "Question dissappeared";
}