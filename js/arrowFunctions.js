// ARROW FUNCTIONS -- Here we do not declare the function keyword, we use just parentheses, the arrow and the braces(optional);
function Demarcation(){
    console.log('-----------------------------------------------------------------------')
    console.log('-----------------------------------------------------------------------')
    console.log('-----------------------------------------------------------------------')
}

const square = function(x){
    return x * x;
}

const SimplifiedSquare = (x) =>{
    return x * x;
}

const sum = function(x,y){
    return x + y;
}

const simplifiedSum = (x,y) => x + y;

const isEven = (num) =>{
    return num % 2 === 0;
}

// RULE 1
//When there is only one parameter, we could leave off the parenthesis

// const overSimplifySquare = x => (x * x);
const overSimplifySquare = x => x * x;

// RULE 2
// When a function is defined with no parameters, we have to have empty parenthesis

const greet = () => console.log('Hello');
Demarcation();

const nums = [1,2,3,4,5,6,7,8];

const doubles1 = nums.map(function(n){
    return n * 2;
})

const doubles2 = nums.map(n => n * 2);

const parityList = nums.map(function(n){
    if(n % 2 === 0) return `${n} is even`;
    return `${n} is odd`
});

const parityList2 = nums.map(n =>{
    if(n % 2 === 0) return `${n} is even`;
    return `${n} is odd`
});


