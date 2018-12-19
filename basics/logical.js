// let isOneGuestVegan = false;
// let isOtherGuestVegan = false;

// if (isOneGuestVegan&&isOtherGuestVegan){
//     console.log("Only offer up vegan dishes");
// } else if (isOneGuestVegan||isOtherGuestVegan) {
//     console.log("Make sure to offer some vegan options");
// } else {
//     console.log("Offer up anything on the menu.");
// }

//----------------------------------------------------------
// Convert Fahrenheit to Celsius 
// var fahrenheit = 68;
// var celsius = 20;

// function fahrenheitToCelsius(fahrenheit) {
//     return (5/9)*(fahrenheit-32);
// }

//20°C × 9/5 + 32
// function celsiusToFahrenheit(celsius) {
//     return celsius*1.8+32;
// }

// console.log(fahrenheitToCelsius(fahrenheit) + " C");
// console.log(celsiusToFahrenheit(celsius) + " F");


//========================================
// let getTip = function(total, tipPersent = .2) {
//     return `A ${tipPersent}% tip on $${total} would be $${total*tipPersent}`
// }

// console.log(getTip(240));


//========================================
// Students score, Total possible score
//15/20 -> You got a C (75%)!
//A (90-100), B (80-89), C (70-79), D (60-69), F (0-59)

// Calculate % => (score/total)*100

function calcPersentage(studentScore, totalScore) {
    if(typeof studentScore === "number" && typeof totalScore === "number") {
        return (studentScore/totalScore)*100;
    } else {
        throw Error("Please provide number only");
    }
}

const studentScore = 18;
const totalScore = 30;


try {
    function greadeCalc() {
        const persentage = calcPersentage(studentScore, totalScore);
        let grade = "";
        
        if (persentage>=90) {
            grade="A";
        } else if (persentage>=80) {
            grade="B";
        } else if (persentage>=70) {
            grade="C";
        } else if (persentage>=60) {
            grade="D";
        } else {
            grade="F";
        }

        return `${studentScore}/${totalScore} -> You got a ${grade} (${persentage}%!)`
    }
    console.log(greadeCalc());
} catch (e) {
    console.log(e.message);
}

    

// console.log(greadeCalc());

//====================

// let person = {
//     name: 'Elisaveta',
//     age: 25,
//     location: 'Sofia',
//     getOlder: function() {
//         this.age++;
//     }
// }
// getSummary(person);
// person.getOlder();
// getSummary(person);

// function getSummary(person) {
//     console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
// }



// console.log("\n ==================================================================== \n");
// //----------------------------------------------------------
// // Convert Fahrenheit to Celsius and Kelvin
// // celsius = (fahrenheit-32)*5/9
// // kelvin = (fahrenheit+459.67)*5/9
// var fahrenheit = 68;

// function fahrenheitConvertor(fahrenheit) {
//     return {
//         fahrenheit: fahrenheit,
//         celsius: (5/9)*(fahrenheit-32),
//         kelvin: (5/9)*(fahrenheit+459.67)
//     }
// }

// console.log(`In fahrenheit is ${fahrenheitConvertor(fahrenheit).fahrenheit}`);
// console.log(`In celsius is ${fahrenheitConvertor(fahrenheit).celsius}`);
// console.log(`In kelvin is ${fahrenheitConvertor(fahrenheit).kelvin}`);

// // let far = fahrenheitConvertor(fahrenheit).fahrenheit;
// // let celsius = fahrenheitConvertor(fahrenheit).celsius;
// // let kelvin = fahrenheitConvertor(fahrenheit).kelvin;

// console.log("\n ==================================================================== \n");
//----------------------------------------------------------
// Account

// let myAccount = {
//     name: 'Andrew Mead',
//     expenses: 0,
//     income: 0
// }

// function addExpense (account, amount) {
//     account.expenses+=amount;
// }

// function addIncome (account, amount) {
//     account.income+=amount;
// }

// function resetAccount (account) {
//     account.expenses = 0;
//     account.income = 0;
// }

// function getAccountSummary(account) {
//     let balance = account.income - account.expenses;
//     return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
// }

// console.log(getAccountSummary(myAccount));
// addIncome(myAccount, 1000);
// addExpense(myAccount, 100);
// console.log(getAccountSummary(myAccount));
// addExpense(myAccount, 30);
// console.log(getAccountSummary(myAccount));
// resetAccount(myAccount);
// console.log(getAccountSummary(myAccount));


// console.log("\n ==================================================================== \n");
// //----------------------------------------------------------


// let restaurant = {
//     name: 'ABC',
//     guestCapacity: 75,
//     guestCount: 0,
//     checkAvailability: function (partySize) {
//         let seatsLeft = this.guestCapacity - this.guestCount;
//         return (partySize <= seatsLeft);
//     },
//     seatParty: function(partySize) {
//         if (this.checkAvailability(partySize)) {
//             this.guestCount+=partySize;
//         } else {
//             console.log("No enough space");
//         }
//     },
//     removeParty: function(partySize){
//         if(partySize<=this.guestCount) {
//             this.guestCount-=partySize;
//         } else {
//             console.log(`There are ${this.guestCount} guests`)
//         }
//     }
// }

// restaurant.seatParty(72);
// console.log(restaurant);
// console.log(restaurant.checkAvailability(4));
// restaurant.removeParty(5);
// console.log(restaurant.checkAvailability(4));

// console.log("\n ==================================================================== \n");
// //----------------------------------------------------------

// function isValidPass(password) {
//     return ((password.length >=8 ) && !password.includes("password")); 
// }

// console.log(isValidPass("hdsjsjsjwjde"));
// console.log(isValidPass("1234"));
// console.log(isValidPass("password12hfd"));

// console.log("\n ==================================================================== \n");
// //----------------------------------------------------------

// function guessNum(guess) {
//     let min = 1;
//     let max = 5;
//     let random = Math.floor(Math.random()*(max-min+1)+min);
//     console.log(random);
//     return random===guess;
// }

// console.log(guessNum(4));
