const { log } = console;
//EXAMPLE OUTPUT
// log("Hello world!");
// ***********************
const select = (selector, scope = document) => {
    return scope.querySelector(selector);
};
// EXAMPLE USAGE
// const title = select("h1");
// const className = select(".class");
// const message = select("#message", formElem);
//EXAMPLE OUTPUT
//const title = document.querySelector("h1");
// const className = document.querySelector(".class");
// const message = formElem.querySelector("#message");
// ************************
const listen = (target, event, callback, ...options) => {
    return target.addEventListener(event, callback, ...options);
};
// EXAMPLE USAGE
// listen(buttonElem, "click", () => console.log("Clicked!"));
//
// listen(document, "mouseover", () => console.log("Mouse over!"));
//
// listen(formElem, "submit", () => {
//         console.log("Form submitted!");
//     }, { once: true }
// );
//*************************
const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// EXAMPLE USAGE
// random(5, 10);
// // 7
// **********************
const slugify = (string, separator = "-") => {
    return string
        .toString() // Cast to string (optional)
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string (optional)
        .replace(/\s+/g, separator) // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\_/g, separator) // Replace _ with -
        .replace(/\-\-+/g, separator) // Replace multiple - with single -
        .replace(/\-$/g, ""); // Remove trailing -
};
// EXAMPLE USAGE
// slugify("Hello, World!");
// Expected output: "hello-world"

// slugify("Hello, Universe!", "_");
// Expected output: "hello_universe"
//*****************************
const validateEmail = (email) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
};
// VALIDATE EMAIL- RETURN BOOLEAN EXAMPLE
// validateEmail("youremail@org.com"); // true
// validateEmail("youremail@com"); // false
// validateEmail("youremail.org@com"); // false
// ***************************
const capitalize = (str) => {
    const arr = str.trim().toLowerCase().split(" ");

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join(" ");
};
//EXAMPLE USAGE
// capitalize("hello, world!");
// Expected output: "Hello, World!"
//******************************
function removeDuplicates(a) {
    return a.filter(function(e, pos) {
        return a.indexOf(e) == pos;
    });
}
// input:  2,7,1,8,2,8,1,8,2,8
//     output: 2,7,1,8
//     expect: 2,7,1,8

function reverseString(s) {
    return s.split('').reverse().join('');
}
//input:  desserts kayak in a racecar while stressed
//     output: desserts elihw racecar a ni kayak stressed
//     expect: desserts elihw racecar a ni kayak stressed

function arraysEqual(a, b) {
    if (a === b) { return true };
    if (a == null || b == null) { return false };
    if (a.length != b.length) { return false };

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) { return false };
    }
    return true;
}
//input:  1,2,3,4,5,1,2,3,4,5
//     output: true
//     expect: true