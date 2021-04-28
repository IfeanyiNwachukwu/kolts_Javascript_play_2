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
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
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

// FIND

// Returns the value of the first element in the array that satisfies the provided testing function

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Doubtfire",
    "Mr. Deeds"
]

let movie = movies.find(movie =>{
    return movie.includes('Mrs.');
});

let movie2 = movies.find(movie =>{
    return movie.indexOf('Mrs') === 0;
})

let movie3 = movies.find(m =>{
    if(m.indexOf('Mr')){
        return m;
    }
})
const goodBook = books.find(b => b.rating >= 4.3);
const neilBook = books.find(b => b.authors.includes('Neil Gaiman'));

//Note : Find is great esp for items based of an identifier(e.g a username or id)

//FILTER
// Creates a new array with all elements that pass the test implemented by the provided function

// const nums = [9,8,7,6,5,4,3,2,1];
const odds = nums.filter(n => {
    return n % 2 === 1;
})

const smallNums = nums.filter(n => n < 5);

const numsAgain = [34,35,67,54,109,102,32,9];

const odds2 = numsAgain.filter(n =>{
    return n % 2 === 1
})

const evens = numsAgain.filter(n =>{
    return n % 2 === 0
});

// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'Changing My Mind',
//     authors: ['Zadie Smith'],
//     rating: 3.83,
//     genres: ['nonfiction', 'essays']
//   },
//   {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//     genres: ['fiction', 'graphic novel', 'fantasy']
//   },
//   {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//     genres: ['fiction', 'historical fiction']
//   },
//   {
//     title: 'The Name of the Wind',
//     authors: ['Patrick Rothfuss'],
//     rating: 4.54,
//     genres: ['fiction', 'fantasy']
//   },
//   {
//     title: 'The Overstory',
//     authors: ['Richard Powers'],
//     rating: 4.19,
//     genres: ['fiction', 'short stories']
//   },
//   {
//     title: 'The Way of Kings',
//     authors: ['Brandon Sanderson'],
//     rating: 4.65,
//     genres: ['fantasy', 'epic']
//   },
//   {
//     title: 'Lord of the flies',
//     authors: ['William Golding'],
//     rating: 3.67,
//     genres: ['fiction']
//   }
// ]

const greatBooks = books.filter(b => b.rating > 4.3);

const fantasyBooks = books.filter(book => book.genres.includes('fantasy'));

const shortForm = books.filter(book => {
   return book.genres.includes('short stories')  || book.genres.includes('essays');
})

const query = 'The';
const results = books.filter(book =>{
    const bookTitle = book.title.toLowerCase();
    return bookTitle.includes(query.toLowerCase());

});

// EVERY

// tests wether all elements in the array pass the provided function. It returns a Boolean value

const wordsAgain = ["dog","dig","log","bag","wag"];

const allThreeLetterWords = wordsAgain.every(word => {
    return word.length === 3;
})

const AllBeginsWithLetterD = wordsAgain.every(word =>{
    return word.indexOf('d') === 0;
})

allEndsWithLetterG = wordsAgain.every(word =>{
    let last_letter = word[word.length - 1];
    return last_letter === 'g';
});

allAreThreeletterLong = wordsAgain.every(word => word.length === 3);


// SOME
// Similar to every, but returns true if ANY of the array elements pass the test function

const wordsToCheck = ['dog','jello','log','cupcake','bag','wag']

// Are there any words longer than 4 characters?

let AanyLongerThan4Char = wordsToCheck.some(word => word.length > 4);

// does any of the words start with the letter 'Z'?

let anyStartWithZ = wordsToCheck.some(word => word[0] === 'z');

// Does any of the words contain 'cake'?

let containsCake = wordsToCheck.some(word => word.includes('cake'));

let anyStartWithD = wordsToCheck.some(word => word[0] === 'd');

const allGoodBooks = books.every(book => book.rating > 4.5);

// SORT

const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

// sort in ascending order

const ascendingOrder = prices.slice().sort((a,b) => a - b);

const descendingOrder = prices.slice().sort((a,b) => b - a);

const bookSortAscending = books.sort((a,b) => a.rating - b.rating);

const bookSortDescending = books.sort((a,b) => b.rating - a.rating);

// REDUCE

// REDUCE executes a reducer function on each element of the array, resulting in a single value.

let total = [3,5,7,9,11].reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
});

const numsToCheck = [3,4,5,6,7];
const product =  numsToCheck.reduce((total,currentValue) =>{
    return total * currentValue;
})


