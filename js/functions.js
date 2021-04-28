// function grumpus(){
//     console.log('ugh...you again...');
//     console.log('FOR THE LAST TIME...');
//     console.log('LEAVE ME ALONE!!!');
// }
// grumpus();

// function rollDie(){
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${roll}`);
// }

// function throwDice(){
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }

// // ARGUMENTS
// var input = prompt('please enter name:')

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// greet(input);

// // Functions With Multiple Arguments

// function sum(x,y){
//     console.log(x + y);
// }

// function divide(a,b){
//     console.log(a/b);
// }

//// RETURN STATEMENTS

// function sum(x,y){
//     return x + y;
// }

// function divide(a,b){
//     return a/b;
// }

// function isPurple(color){
//     if(color.toLowerCase() === 'purple'){
//         return true;
//     }
   
//     return false;
   
// }

// function isPurple(color){
//     return color.toLowerCase() === 'purple';
// }

// function containsPurple(arr){
//     for(let color of arr){
//         if(color.toLowerCase() === 'purple' || color.toLowerCase() === 'magenta'){
//             return true
//         }
//     }
//     return false;
// }

// // CHALLENGE 1

// function isValidPassword(password,username){
//     let passWord = password.trim();
//     let valid = passWord.length >= 8 && passWord.indexOf(' ') === -1 && password.indexOf(username) === -1;

//     return valid;

// }

// function avg(arr){

//     let average = 0;
//     let sum = 0;
//     let freq = arr.length;

//     for(let num of arr){
//        sum += num;
        
//     }
//     average = sum/freq;
//     return average;
// }

// if(true){
//     var animal = 'dog';
//     let anime = 'pento'
// }

// console.log(animal);
// console.log(anime);

// // SCOPING
// // The let keyword is both block and function scoped while the var keyword is only function scoped and not block scoped

// function doubleArr(arr){
//     const result = [];
//     for(let num of arr){
//         let double = num * 2;
//         result.push(souble);
        
//     }

//     return result;
// }

// // Function Expressions
// Functions are stored in a variable but it does not have a name

// function add(x,y){
//     return x + y;
// }

// // Anonymous function expression
// const sum = function(x,y){
//     return x + y;
// }

// // Named function Expression

// const product = function multiply(x,y){
//     return x * y;
// }

// HIGHER ORDER FUNCTIONS

// function add(x,y){
//     return x + y;
// }

// const subtract = function(x,y){
//     return x - y;
// }

// function multiply(x,y){
//     return x * y;
// }

// const divide = function(x,y){
//     return x / y;
// }

// const operations = [add,subtract,multiply,divide]

// // operations[1](5,6);

// // Functions can also be a part of an object

// const thing = {
//     doSomething: multiply
// }

// thing.doSomething(50,4);

// // FUNCTIONS AS ARGUMENTS

// function callTwice(func){
//     func();
//     func();
// }

// function laugh(){
//     console.log("HAHAHAHAHAHAHAHAHAHAHAHAHA");
// }

// callTwice(laugh);

// function repeatNTimes(action, num){
//     for(let i = 0; i < num; i++){
//         action();
//     }
// }

// repeatNTimes(laugh,14);


// // FUNCTIONS THAT RETURNS FUNCTIONS -- FUNCTION FACTORIES


// function makeBetweenFunc(min,max){

//     return function (val){
//         return val >= min && val <= max;
//     }
// }

// const inAgeRange = makeBetweenFunc(18,100); // Outer function is called and it makes the inner function available

// inAgeRange(17); // inner function is called here
// inAgeRange(68);

// function multiplyBy(num){
//     return function(x){
//         return x * num;
//     }
// }

// // first time function is called in function expression--- the inner function is manufactured and made available for use

// const multiplyBy5 = multiplyBy(5);

// multiplyBy5(10);

// CALLBACK FUNCTIONS

// function grumpus(){
//     alert('GAAAH GO AWAY!')
// }
// setTimeout(grumpus, 5000);

// const btn = document.querySelector('button')

// btn.addEventListener('click', function(){
//     alert('Why did you click me!');
// })

//// HOISTING