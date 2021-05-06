// // INNER TEXT
// // InnerText returns all the text inside the element including the text in nexted elements

// const h1 = document.querySelector('h1');
// const ul = document.querySelector('ul');
// display(` ${h1.innerText}`);   
// h1.innerText = 'Javascript DOM Selection and Manipulation'  
// // My Webpage


// display(`: ${ul.innerText}`);

// // First Thing
// // Second Thing
// // Third Thing
// // ul.innerText = 'I am a Fat Ul'

// // Note : innerText is good for heading or sections without nested text

// // Text Content

// // INNER HTML
// const form = document.querySelector('form');
// display(form.innerHTML);
// display(ul.innerHTML);
// ul.innerHTML = 
// "<li>Carrots</li>" +
// '<li class="special"li> Peas</li>' +
// "<li>Brocolli</li>" +
// "<li>cabbages</li>" +
// "<li>onions</li>" +
// '<li class="special">lettuce</li>' 

// display(ul.innerHTML);



// // VALUES
// const inputs = document.querySelectorAll('input');
// inputs[0].value = 'Love';
// inputs[1].value = 'Miracle';
// inputs[2].checked = false;
// inputs[0].value = '';


// // GET ATTRIBUTES AND SET ATTRIBUTES
// const range = document.querySelector('input[type="range"]');
// display(range);

// const max = range.getAttribute('max');
// const min = range.getAttribute('min');
// const attrType = range.getAttribute('type');

// range.setAttribute('min','-500');

// // DOM TRANSVERSAL
    
//     // PARENT ELEMENT
// const firstLi = document.querySelector('li');
// const firstLiParent = firstLi.parentElement;
// const firstLiGrandParent = firstLi.parentElement.parentElement;

//         // CHILDREN ELEMENTS
// const ul = document.querySelector('ul');
// const ulChildren = ul.children;
// // Sibligs are on the same level they share a parent
// const firstLiNextElementSibling = firstLi.nextElementSibling;

// // CHANGING MULTIPLE ELEMENTS AT THE SAME TIME

// const allLis = document.querySelectorAll('li');

// for(let i = 0; i < allLis.length; i++){
//     allLis[i].innerText = "WE ARE ALL CHAMPIONS";
// }

// // ALTERING STYLES
// // Javascript can be used to alter existing style properties but not read them except these styles are inline
// const h1 = document.querySelector('h1');
// h1.style.color = 'orchid'

// const p = document.querySelector('p');
// display(p);
// p.style.color = 'white';
// p.style.backgroundColor = 'black';
// p.style.fontSize = '40px';

// const colors = ['red','orange','yellow','green', 'blue','purple'];

// const allLIS = document.querySelectorAll('li');

// allLIS.forEach((li,i) => {
//     const color = colors[i];
//     console.log(li, color);
//     li.style.color = color;

// });


// // GETTING COMPUTED STYLES

// const li1 = allLIS[0];
// li1Style = getComputedStyle(li1);
//  display(li1Style.color);
//  li1Style.color = 

const todo = document.querySelector('#todos .todo');

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opacity = '50%';

// Alternatively

// todo.getAttribute('class');
// //todo
// todo.setAttribute('class','todo done');

// CLASSLIST PROPERTY
displayObject(todo.classList);
todo.classList.remove('done');
todo.classList.add('done');

// CREATE ELEMENT

const newH2 = document.createElement('h2');
newH2.innerText = 'I love javascript';
newH2.classList.add('special');
displayObject(newH2);

// APPEND CHILD
// It is a method that we call on a parent that we want to append an element to

const section = document.querySelector('section');

section.appendChild(newH2); // Append child takes element to the end of the children

const newImg = document.createElement('img');
newImg.style.width = '300px';

newImg.src = 'https://images.unsplash.com/photo-1620238740270-ec79b3534c0e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60';

document.body.appendChild(newImg);

// INSERT BEFORE

const parentUL = document.querySelector('ul');
const newLi = document.createElement('li');
const firstLi = document.querySelector('li.todo');
newLi.innerText = 'I AM A NEW LI';

parentUL.insertBefore(newLi,firstLi);

// INSERT ADJACENT HTML

const i = document.createElement('i');
i.innerText = 'I AM ITALICS !!!';
const firstP = document.querySelector('p');
firstP.insertAdjacentElement('beforebegin',i);

firstP.insertAdjacentHTML('afterend','<i>I AM ITALICS !!!</i>')

// APPEND
// 
const secondUl = document.querySelector('section ul');
secondUl.append(newLi,i);
secondUl.querySelector('special');





// REMOVE AND REMOVE CHILD
const secondUlLastChild = secondUl.lastChild;
const removeMe = document.querySelector('section ul').querySelector('.special');  // secondUl.querySelector('.special')

// secondUl.removeChild(removeMe); // removechild needs the parent node to work

// With remove(), the parent element is not needed

secondUlLastChild.remove();










































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