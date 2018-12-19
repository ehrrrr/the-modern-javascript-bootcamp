'use strict'

// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem("todos");
    try {
        return todosJSON ? JSON.parse(todosJSON) : [];
    } catch (e) {
        return [];
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
}

//Render application todos based on filters
const renderTodos = (todos, filters) => {

    const filteredTodos = todos.filter( (todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompletedTodos = filteredTodos.filter((todo) => !todo.completed);
    
    document.querySelector("#todo-container").innerHTML="";
    const summary = generateSummaryDOM(incompletedTodos);
    document.querySelector("#todo-container").appendChild(summary);
    
    filteredTodos.forEach((todo) => {
        const todoEl = generateTodoDOM(todo);
        document.querySelector("#todo-container").appendChild(todoEl);
    })
}

//Remove todo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex(function(todo){
        return todo.id===id;
    })
    if(todoIndex>=0) {
        todos.splice(todoIndex, 1);
    }
}

//Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('label');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute("id", todo.id);
    todoEl.appendChild(checkbox);
    if(todo.completed){checkbox.setAttribute("checked", "true")} // checkbox.checked = todo.completed;
    checkbox.addEventListener("change", function(e){
        if(e.target.checked) {
            todo.completed = true;
        } else {
            todo.completed = false;
        }
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // Setup the todo text
    todoText.textContent = todo.text;
    todoText.setAttribute("for", todo.id);
    todoEl.appendChild(todoText);

    // Setup the remove button
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    });

    return todoEl;
}

//Get the DOM elements for list summary
const generateSummaryDOM = (incompletedTodos) => {   
    const summary = document.createElement("h2");
    summary.textContent = `You have ${incompletedTodos.length} todos left`;
    return summary;
}