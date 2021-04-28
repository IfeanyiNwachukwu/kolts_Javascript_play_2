function Demarcation(){
    console.log('-----------------------------------------------------------------------')
    console.log('-----------------------------------------------------------------------')
    console.log('-----------------------------------------------------------------------')
}

// FOREACH
const nums = [9,8,7,6,5,4,3,2,1];

// nums.forEach(function(n){
//     console.log(n * n); // n represents each item in the array
// });

nums.forEach(function(el){
    if(el % 2 === 0){     // el represents each item in an array
        console.log(el);
    }
})

Demarcation();
const numbers = [20,21,22,23,24,25,26,27];
numbers.forEach(function(num,idx){
    console.log(idx,num)
})
numbers.forEach(function(num){
    console.log(num * 2);
})

Demarcation();
function printTriple(n){
    console.log(n * 3);
}

numbers.forEach(printTriple);

Demarcation();
const books = [
    {
        title : 'Good Omens',
        authors: ['Terry Pratchett', 'Neil Gaiman'],
        rating: 4.25
    },
    {
        title : 'Bone: The Complete Edition',
        authors: ['Jeff Smith'],
        rating: 4.42
    },
    {
        title : 'American Gods',
        authors: ['Neil Gaiman'],
        rating: 4.11
    },
    {
        title : 'A Gentleman in Moscow',
        authors: ['Amor Towles'],
        rating: 4.36
    },
]

books.forEach(function(book){
    console.log(book.title.toUpperCase());
});

Demarcation();
// MAP
// creates a new the results of calling a callback on every element in the array

const texts = ['rofl','lol','omg','ttyl'];
const caps = texts.map(function(t){
    return t.toUpperCase();
})
console.log(caps);
Demarcation();
const numbersA = [20,21,22,23,24,25,26,27];
const words = ['asap','byob','rsvp','diy'];

const doubles = numbers.map(function(num){
    return num * 2;
})
console.log(doubles);

Demarcation();

const numDetails = numbersA.map(function(n){
    return {
        value : n,
        isEven: n % 2 === 0
    }
});
console.log(numDetails);

Demarcation();

const newWords = words.map(function(w){
    return w.toUpperCase().split('').join('.');
});
console.log(newWords);

Demarcation();

const titles = books.map(function(book){
    return book.title;
});

console.log(titles);