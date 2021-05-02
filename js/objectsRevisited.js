// SHORTHAND PROPERTIES
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
// The Old Way
const getStats = (arr) => {
   let min = Math.min(...arr);
   let max = Math.max(...arr);
   let sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue);
   let avg = sum/arr.length;

    // return {
    //     Min : min,
    //     Max : max,
    //     Sum : sum,
    //     Avg : avg
    // }
    return {
        min,
        max,
        sum,
        avg
    }
}
const objData = getStats(reviews);


// A nice easy way to create object literals when you have variables

const max = Math.max(...reviews);
const min = Math.min(...reviews);
const sum = reviews.reduce((previousValue, currentValue) => previousValue + currentValue);
const avg = sum/reviews.length;

const stats = {min, max, sum, avg};

// COMPUTED PROPERTIES

// Computed Properties allows us to make objects with a dynamic key

const role = 'host';  // We want to make the value 'host' the key of a new object
const person = 'Jools Holland' // we want to set 'Jools Holland' as the value
const role2 = 'Director'
const person2 = 'James Cameron'

// If we do
// const team = {
//     role : person
// }

// {role: "Jools Holland"} // property/key was not computed

// Old Fix

// const team = {}

// team[role] = person
// team[role2] = person2
// {host: "Jools Holland"}  // it Works

// New Way

const team = {
    [role] : person,
    [role2] : person2,
    [1 + 6 + 9] : 'sixteen'

}

// Old Way -- Not Using Computed Proprty
function addProp(obj,k,v){
const copy = {...obj};
copy[k] = v;

return copy;
}

const result = addProp(team, 'happy',':)')

const addProp2 = (obj,k,v) => {
    return {
        ...obj,
        [k] : v
    }
}

const res2 = addProp2(team,'lover','Miracle');

// METHODS
// We can add functions as properties on objects.
// We call them Methods
const add = (x,y) => x + y;
const math = {
    numbers : [1,2,3,4,5],
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x/y;
    },
    square : function(x){
        return x * x;
    },
    add
}

// New Shorthand for adding a Method to an object --- No need to add a Key Value pair
const math2 = {
    blah : 'Hi!',
    add(x,y){
        return x + y;
    },
    multiply(x,y){
        return x * y;
    },
    subtract(x,y){
        return x - y;
    },
    divide(x,y){
        return x/y;
    },
    exponent : (x,y) => x ** y
}

const auth = {
    username : 'TommyBot',
    login(){
       
        console.log('LOGGED IN');
    },
    logout(){
        console.log('GOODBYE');
    }
}

// The THIS Keyword

// It is one important tool for writing useful methods in objects
// see THIS as a refernce to the current execution scope

// THIS could be a refernce to the global scope  -- The Window is the global scope


function sayHI(){          // This sayHI function is global
    display('HI');
    display(this);
}

// Note: Var is added to the global scope, while let and const are not aded to the global scope

var boy = 'Uchendu';
// window.boy
// "Uchendu"

// Note that THIS refers to an object and that object represents the correct execution scope



// THIS IN 

const Person = {
    first : 'Cherilyn',
    last  : 'Sirkisian',
    nickName : 'Cher',
    fullName(){
       console.log(`${this.first} ${this.last}  AKA ${this.nickName}`)
    }
}

const PersonA = {
    firstName : 'Miracle',
    lastName  : 'Eberendu',
    nickName  : 'Mimi',
    fullName(){
        const {firstName, lastName, nickName} = this;
        return `${firstName} ${lastName} AKA ${nickName}`

    },
    printBio(){
        const fullName = this.fullName();
        return `${fullName} is a person`
    }
}


// THIS Invocation Context
// The value of this depends on the invocation context it is used in

// Arrow functions naturally do not get their own this

const annoyer = {
    phrases : ["Literally", "cray cray", "I can't even", "Totes", "YOLO","can't stop won't stop"],
    pickPhrase(){
        const {phrases} = this;
        const idx = Math.floor(Math.random() * phrases.length);
        return phrases[idx]
    },
    start(){
       
        this.timerId = setInterval(() => {
            console.log(this.pickPhrase());
        }, 3000);
    },
    stop(){
        clearInterval(this.timerId);
        console.log('PHEW THANK HEAVENS THAT IS OVER')
    }
}

// THIS in an inner function inside the object does not refer to the object but the window

// Important Note : Arrow functions THIS always refer to the parent but they never 

// PUTTING IT ALL TOGETHER

const suits = ['hearts', 'diamonds', 'spades', 'clubs'];

const values = '1,2,3,4,5,6,7,8,9,10,J,Q,K,A'



















function display(input){
    console.log(input);
}

function Demarcation(){
    console.log('-----------------------------------------------------------------------')
    console.log('-----------------------------------------------------------------------')
    console.log
}