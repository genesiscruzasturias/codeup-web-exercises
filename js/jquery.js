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

//alert
var contents2 = $('h1').html();
alert(contents2);

//multiple
$('p, li, h1').css('background-color', '#FF0');