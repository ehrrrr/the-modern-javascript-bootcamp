console.log("\n================================\n");
//TO DO app

const todos = [{
    text: "Make your bed",
    completed: true
},{
    text: "Eat breakfast",
    completed: true
},{
    text: "Prepare tea",
    completed: true
},{
    text: "Buy natural cosmetics",
    completed: true
},{
    text: "Put body lotion",
    completed: true
},{
    text: "Study JavaScript",
    completed: true
},{
    text: "Write some code",
    completed: true
},{
    text: "Do great workout",
    completed: false
},{
    text: "Take shower",
    completed: false
},{
    text: "Relax",
    completed: false
}];

function deleteTodo(todos, todoText) {
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase();
    })
    if(index>=0){ todos.splice(index,1);}
    else {console.log("There isn't any todo with this text")}
}

function getThingsToDo(todos) {
    return todos.filter(function(todo){
        return !todo.completed;
    });
}

function sortTodos(todos) {
    todos.sort(function(a,b){
        if(!a.completed && b.completed) {
            return -1;
        } else if (a.completed && !b.completed){
            return 1;
        } else {
            return 0;
        }
    })
}


console.log(todos);
console.log("\n================================\n");
deleteTodo(todos, "Buy Natural Cosmetics");
console.log("\n================================\n");
console.log(todos);
console.log("\n================================\n");
console.log(getThingsToDo(todos));

console.log("\n================================\n");
console.log("\n================================\n");
sortTodos(todos);
console.log(todos);