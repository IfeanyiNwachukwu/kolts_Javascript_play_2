// DEFAULT FUNCTION PARAMETETER VALUES
Demarcation();
// Old Way
function multiply(x,y){
    if(typeof y === 'undefined'){
        y = 1;
    }

    return x * y;
}

function simpleMultiply(x,y){
    y = typeof y === 'undefined' ? 1 : y;
    return x * y;
}

// New Way
function defaultMultiply( a, b = 1){
    return a * b;
}

const greet =  (person, greeting = 'hi') => {
    console.log(`${greeting},${person}`);
}

// SPREAD FUNCTION CALLS
// Spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments (for function calss) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs(for object literals) are expected.

// SPREAD FOR FUNCTION CALLS
// Expands an iterable (array,string, etc.) into a list of arguments

Demarcation();
const nums = [9,3,2,8];
console.log(Math.max(nums)); //NaN
// Use Spread
console.log(Math.max(...nums));

function givemeFour(a,b,c,d){
    display(`a: ${a}`);
    display(`b: ${b}`);
    display(`c: ${c}`);
    display(`d: ${d}`);
    
}

display(givemeFour(...'GOAT'));

// SPREAD IN ARRAY LITERALS

// Create a new array using an existing array. Spreads the elements from one array into a new array
Demarcation();
const nums1 = [1,2,3];
const nums2 = [4,5,6];
const nums3 = [...nums1,...nums2]
const numgroup1 = ['a','b',...nums1]
const numgroup2 = [...nums1, ...nums2, 7,8,9];

display(`nums1  =  ${nums1}`);
display(`nums2  =  ${nums2}`);
display(`nums3  =  ${nums3}`);
display(`numgroup1  =  ${numgroup1}`);
display(`numgroup2  =  ${numgroup2}`);

Demarcation();

const cephalopods = ['dumbo octopus','humboldt squid','flamboyant cuttlefish'];
const gastropods = ['giant african snail','banana slug','variable neon slug'];
const cnidaria = ['fire coral', 'moon jelly'];

const mollusca = ['garden slug',...cephalopods,...gastropods];
display(mollusca);

const invertebrates = [...cnidaria,...gastropods,...cephalopods];
display(invertebrates);

// This can also be achieved using concat
const mollusca2 = cephalopods.concat(gastropods);
display(mollusca2);

// We can also use the spread array to clone an array into a new array

const cephalopodsCopy = [...cephalopods];
display(cephalopodsCopy);


// SPREAD IN  OBJECT LITERALS

































function display(input){
    console.log(input);
}

function Demarcation(){
    console.log('-----------------------------------------------------------------------')
    console.log('-----------------------------------------------------------------------')
    console.log
}