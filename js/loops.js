// const gameBoard = [
//     [4,32,8,4],
//     [64,8,32,2],
//     [8,32,16,4],
//     [2,8,4,2]
// ]

// for(let i = 0; i < gameBoard.length; i++){

//     console.log(gameBoard[i]);
//     for(let j = 0; j < gameBoard[i].length; j ++){
//         console.log(gameBoard[i][j])
//     }
// }

// THE WHILE LOOP
// A while loop really excels in situations when we do not know how long we want the loop to run

// let i = 0;
// while(i <= 5){
//     console.log(i);
//     i++;
// }

// const target = Math.floor(Math.random() * 10);
// console.log(`target: ${target}`);
// let guess = Math.floor(Math.random() * 10);

// while(guess !== target){
    
//     guess = Math.floor(Math.random() * 10);
    
//     console.log(`Target: ${target}   Guess: ${guess}`)
// }


// console.log(`CONGRATS YOU WIN`);

// THE BREAK KEYWORD

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(true){
//     if(target === guess) break;

//     guess = Math.floor(Math.random() * 10);
//     console.log(`Target: ${target}   Guess: ${guess}`)
// }

// console.log(`CONGRATS YOU WIN!!`);

// For...Of Loop

// let subReddits = ['soccer','popheads','cringe','books']

// for(let subreddit of subReddits){
//     console.log(subreddit);
// }

// for(let char of 'cockadoodledo'){
//     console.log(char.toUpperCase());
// }

const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
]

for(let i = 0; i < magicSquare.length; i++){
    console.log(magicSquare[i]);
    let sum = 0;
    for(let j = 0; j < magicSquare[i].length; j++){
        sum += magicSquare[i][j];
        
    }
    console.log(`${magicSquare[i]} summed to ${sum}`);
}

const words1 = ['mail', 'milk', 'bath', 'black']
const words2 = ['box', 'shake', 'tub', 'berry'];

for(let i = 0; i < words1.length; i++){
    console.log(`${words1[i]}${words2[i]}`)
}

// FOR IN LOOPS --- Ideal for objects
// Note For Of loops work with iterables like arrays and strings but an object is not iterable hence the need to use a FOR IN loop
console.log('MOVIES');
const movieReviews = {
    Arrival                 : 9.5,
    Alien                   : 9,
    Amelie                  : 8,
    'In Bruges'             : 9,
    Amadeus                 : 10,
    'Kill Bill'             : 8,
    'Little Miss Sunshine'  : 8.5,
    Coraline                : 7.5,

}

for (let movie of Object.keys(movieReviews)){
    console.log(movie, movieReviews[movie]);  // Note: movie is the key for accessing the value movieReviews[movie]
}

const ratings = Object.values(movieReviews);

let total = 0;
for(let r of ratings){
    total += r;
}

let avg = total /= ratings.length

console.log(avg);

// FOR IN LOOPS --- Ideal for objects

const jeopardyWinnings = {
    regularPlay            : 2522700,
    watsonChallenge        : 300000,
    tournamentOfChampions  : 500000,
    battleOfTheDecades     : 100000
};

for(let prop in jeopardyWinnings){
    console.log(prop);
    console.log(jeopardyWinnings[prop]);
}

for(let k in [88,99,77,66])[
    console.log(k);
]



