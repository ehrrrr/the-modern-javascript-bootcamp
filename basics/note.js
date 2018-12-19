// const notes = ['Note 1', 'Note 2', 'Note 3'];
// console.log(notes.length);
// console.log(notes[0]);
// console.log(notes[notes.length-1]);
// console.log(notes.pop());
// notes.push("My new note");
// console.log(notes);
// notes.unshift("My first note");
// console.log(notes);
// notes.splice(1, 1, "This is new second  item");
// console.log(notes);



// console.log("\n================================\n");
// //TO DO
// const todos = ["Go to buy some presents","Study JavaSctipt", "Write code", "See new books"];
// console.log(`You have ${todos.length} todos!`);
// console.log(`Todo: ${todos[0]}`);
// console.log(`Todo: ${todos[todos.length-2]}`);

// console.log("\n");
// todos.forEach(function(item){console.log(item)});

// console.log("\n");
// console.log(todos);
// todos.splice(2, 1);
// console.log(todos);
// todos.push("Do amazing workout");
// console.log(todos);
// todos.shift();
// console.log(todos);


// console.log(`\nYou have ${todos.length} todos!`);

// todos.forEach(function(item, index){
//     console.log(`${index+1}. ${item}`);
// });


console.log("\n================================\n");

const notes = [{}, {
    title: "My next trip",
    body: "I would like to go to Spain"
}, {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better."
}, {
    title: "Office modification",
    body: "Get a new seat."
}]

console.log(notes.length);
// console.log(notes);
//console.log(notes.indexOf({})); ==> false // it's true only for the exactly same object

const index = notes.findIndex(function(note, index){
    console.log(note);
    return note.title === "Habbits to work on";
})
console.log(index);