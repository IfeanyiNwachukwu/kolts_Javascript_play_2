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

const feline = {
    legs: 4,
    family: 'Felidae'
};
const canine = {
    family: 'Caninae',
    furry: true
};
Demarcation();
const dog = {
    ...canine, 
    ispet: true,
    adorable: true};
    display(dog);
const lion = {
    ...feline,
    genus: 'panthera'
}
Demarcation();
display(lion);
const catDog = {
    ...feline,
    ...canine
}
Demarcation();
display(catDog);

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

// Use Spread to Clone Objects

// REST
// It is used when we want to make functions with an unlimited/variable amount of arguments

// Befnore the introduction of let, the way we pass variable amounts of arguments to a function was to use the argument object
Demarcation();
function sumAll(){
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
display(sumAll(2,2,6));
display(sumAll(25,26,78,90,12,34,56,76,78,90,12,34));

function sumUsingArgumentsObject(){
    const argsArray = [...arguments];
    return argsArray.reduce((total,currentValue) =>{
        return total + currentValue;
    })
}

// Important Note : Argument object does not work with Arrow functions

// REST PARAMETERS

// Collects all remaining arguments into an actual array
Demarcation();
function sumAllWithRest(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total;
}

display(sumAllWithRest(5,5,5));
display(sumAllWithRest(5,5,5,5,5,5,5,5,5,5,5,5,5,5));

function sumWithRest2(...num){
    return num.reduce((previousValue,currentValue) =>{
        return previousValue + currentValue;
    })
}

function fullName(first,last, ...titles){
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);

    return [first,last,...titles]
}
Demarcation();
 var namesS = fullName('tom','Jones','III','order of phoenix');

display(namesS);

const restMultiply = (...nums) =>{
   return nums.reduce((previousValue,currentValue) =>{
        return previousValue * currentValue;
    })
}

// DESTRUCTURING

// A short, clean syntax to 'unpack':
    // - values from arrays
    // - properties from objects

    // into distinct variables

    // ARRAY Destructuring

    const raceResults = [
        'Eliud Kipchoge',
        'Feyisa Lelisa',
        'Galen Rupp',
        'Ghirmay Ghebreslassie',
        'Alphonce Simbu',
        'Jared Ward'
    ]
// //   One Way before Destructuring
// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

// With Destructuring
Demarcation()
const [gold,silver,bronze] = raceResults;
// gold is the variable and the first item in array is assigned as the value of gold
// dilver is the variable and the second item in array is assigned as the value of silver

// if we want only the first and fourth elements

// const [first,,,fourth] = raceResults;
// display(first);
// display(fourth);

// const [winner,...others] = raceResults;
// display(winner);
// display(others);

// OBJECT DESTRUCTURING

const runner = {
    first : "Eliud",
    last  : "Kipchoge",
    country : "Kenya",
    title  : "Elder of the Order of the Golden Heart of Kenya"
}

// Note : You need to use the properties of the objects in the destructuring

const {first,last,country} = runner;
display(first);
display(last);
display(country);

// Note : For us to be able to use a new variable name that is different from the object property. We do this

const {country : nation} = runner;
const {title: honorific} = runner;

const {first : firstRunner, ...others} = runner;

// NESTED DESTRUCTURING

const results = [
    {
        first: "Eliud",
        last: "Kipchoge",
        country: "Kenya",
    },
    {
        first: 'Feyisa',
        last: 'Lilesa',
        country : 'Ethiopia',
    },
    {
        first: 'Galen',
        last: 'Rupp',
        country : 'United States',
    }
]

const [{first: goldWinner, country : countryOfGoldWinner}, { country : countryOfSilverWinner}] = results;

const [,silverMedal] = results;
const {countryOfSilverMedalist} = silverMedal;































function display(input){
    console.log(input);
}

function Demarcation(){
    console.log('-----------------------------------------------------------------------')
    console.log('-----------------------------------------------------------------------')
    console.log
}