let city = "Sofia";
let country = "Bulgaria";
let location = city + ", " + country;

console.log(location);

let studentScore = 18;
let maxScore = 20;
let persent = (studentScore/maxScore)*100;
console.log(persent);

//var age = Number(prompt("Whats your age?"));
// var age = 36;

// if(age < 0) {
//     console.log("You can't be with negative age");
// } else if (age < 18) {
//     console.log("Sorry, you are not old enough to enter the venue!");
// } else if(age < 21) {
//     console.log("Yoy can enter, but you can't drink");
// } else if (age===21) {
//     console.log("Happy 21st Birthday!");
//     console.log("Come in. You can drink one free drink");
// } else {
//     console.log("Come in. You can drink");
// }

// if(age%2){
//     console.log("Your age is Odd")
// }

// if(age > 0 && Math.sqrt(age) % 1 === 0) {
//     console.log("Your age is perfect squere");
// }

// console.log("All nums betwen -10 and 19");
// for(var i=-10; i<=19; i++){
//     console.log(i);
// }

// console.log("All EVEN nums betwen 10 and 40");
// for(var i=10; i<=40; i++){
//     if(!(i%2)) {
//         console.log(i);
//     }
// }

// console.log("All ODD nums betwen 300 and 333");
// for(var i=300; i<=333; i++){
//     if((i%2)) {
//         console.log(i);
//     }
// }

// console.log("All nums devisible on 3 and 5");
// for(var i=5; i<=50; i++) {
//     if(!(i%3) && !(i%5)) {
//         console.log(i);
//     }
// }



// Functions

function isEven (num) {
    return num%2===0;
}

// isEven(4);
// isEven(21);

// console.log(isEven(4));
// console.log(isEven(21));

// function factorial(num) {
//     if(num!==0){
//         for(var i=num-1; i>=1; i--) {
//             num*=i;
//         } return num;
//     } else return 1;
// }
// console.log(factorial(5));
// console.log(factorial(2));
// console.log(factorial(0));

// function kebabToSnake(str) {
//     return str.replace(/-/g, "_");
// }
// console.log(kebabToSnake("hello-world"));
// console.log(kebabToSnake("dogs-are-awesome"));
// console.log(kebabToSnake("blah"));

var movies = [
    {
        title: "In Bruges",
        stars: 5,
        seen: true
    },
    {
        title: "Frozen",
        stars: 4.5,
        seen: false
    },
    {
        title: "Mad Max Fury Road",
        stars: 5,
        seen: true
    },
    {
        title: "Les Miserables",
        stars: 3.5,
        seen: false
    }
];

//console.log(movies);

movies.forEach(function(movie){
    if(movie.seen) {
        console.log("You have wached \"" + movie.title + "\" - " + movie.stars + " stars");
    } else {
        console.log("You have not seen \"" + movie.title + "\" - " + movie.stars + " stars");
    }
});