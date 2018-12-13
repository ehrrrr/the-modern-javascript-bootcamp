// Fetch existing todos from localStorage
const getSavedTodos = function(){
    const todosJSON = localStorage.getItem("todos");
    return todosJSON ? JSON.parse(todosJSON) : [];
}

// Save todos to localStorage
const saveTodos = function(todos){
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Render application todos based on filters
function renderTodos(todos, filters) {

    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompletedTodos = filteredTodos.filter(function(todo) {
        return !todo.completed;
    });
    
    document.querySelector("#todo-container").innerHTML="";
    const summary = generateSummaryDOM(incompletedTodos);
    document.querySelector("#todo-container").appendChild(summary);
    
    filteredTodos.forEach(function(todo){
        const todoEl = generateTodoDOM(todo);
        document.querySelector("#todo-container").appendChild(todoEl);
    })
}

//Get the DOM elements for an individual todo
const generateTodoDOM = function(todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);

    // Setup the todo text
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // Setup the remove button
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);

    return todoEl;
}

//Get the DOM elements for list summary
const generateSummaryDOM = function(incompletedTodos) {   
    const summary = document.createElement("h2");
    summary.textContent = `You have ${incompletedTodos.length} todos left`;
    return summary;
}