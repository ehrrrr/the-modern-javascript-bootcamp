const squere = (num) => num*num

const squereLong = (num) => {
    return num*num;
}

console.log(squere(5));

const people = [{
    name: "Andrew",
    age: 27
}, {
    name: "Vikram",
    age: 31
},{
    name: "Jess",
    age: 22
}]

// const under30 = people.filter(function(person){
//     return person.age<30;
// })

// const under30 = people.filter((person) => person.age<30);

// console.log(under30)

// const person = people.find((person) => person.age === 22);
// console.log(person.name);

const team = ["Tyler", "Porter"];
const message = team.length<=4 ? `The theam size: ${team.length}` : 'Too many people on your team';
console.log(message);