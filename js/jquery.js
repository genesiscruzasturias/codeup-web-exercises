console.log("hello")

// Was for previous exercise
// $(function() {
//     alert( 'Here is my awesome alert! Dom has finished loading!' );
// });

// console.log($(".list-item"))
//
// var contents = $('#paragraph').html();
// alert(contents);
//
// // creating border around .codeup
// $('.codeup').css('border', '1px solid red')

//set li font size
$('li').css('font-size', '20px');

//highlight elements
// $('p').css('background-color', '#FF0');
// $('li').css('background-color', '#FF0');
// $('h1').css('background-color', '#FF0');
//
// alert
// var contents2 = $('h1').html();
// alert(contents2);
//
// multiple
// $('p, li, h1').css('background-color', '#FF0');

//change the background color of an h1 element when clicked
$('h1').click(
    function() {
        $("h1").css('background-color', '#FF0');
    });

//paragraphs have a font size of 18px when they are double clicked
$('p').dblclick(
    function() {
        $("p").css('font-size', '18px');
    });

//li text color to red when the mouse is hovering; reset to black when it is not.
$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);