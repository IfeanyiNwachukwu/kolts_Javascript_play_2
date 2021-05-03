// WHAT IS THE DOM
// The DOM is a javascript representation of a webpage
// It's your JS "window" into the contents of a webpage
// It is just a bunch of objects that you can interact with via JS

// SELECT METHODS

// GetElementByID
const image = document.getElementById('bear-photo');
displayObject(image);

const p = document.getElementById('main');
displayObject(p);

// GET ELEMENTS BY TAG NAME

const inputs = document.getElementsByTagName('input');
display(inputs);

for(let input of inputs){
    display(input);
}

// Turning the HTML collection into an array
const arr = [...inputs];
displayObject(arr);

// GET ELEMENTS BY CLASS NAME

var headinggs = document.getElementsByClassName('header')
displayObject(headinggs);

// NESTED SELECTION

const uls = document.getElementsByTagName('ul')[0];
const specials = uls.getElementsByClassName('special');
displayObject(specials);


// QUERY SELECTOR
// A newer, all-in-one method to select a single element

// document.querySelector('h1');
// document.querySelector('#red');
// document.querySelector('.big');
// displayObject(document.querySelector('h1'));
// displayObject(document.querySelector('p'));
// displayObject(document.querySelector('input'));

// displayObject(document.querySelectorAll('ul .special'));

displayObject(document.querySelector('section ul li.special'));

document.querySelector('input[type="password"]');

// querySelectorAll returns a nodelist
// getElementsByTagName returns an HtML Collection

// Note: querySelector is less performant


























function display(input){
    console.log(input);
}
function displayObject(input){
    console.dir(input);
}

function Demarcation(){
    console.log('-----------------------------------------------------------------------')
    console.log('-----------------------------------------------------------------------')
    console.log
}