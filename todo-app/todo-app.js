const todos = getSavedTodos();

const filters = {
    searchText: "",
    hideCompleted: false
}

renderTodos(todos, filters);

//Filter todos by input
document.querySelector("#filter-todos").addEventListener("input", function(e){
    filters.searcedText = e.target.value;
    renderTodos(todos, filters);
});

//Hide and show completed via checkbox
document.querySelector("#is-completed").addEventListener("change", function(e){
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});

//Add todo
document.querySelector("#add-todo-form").addEventListener("submit", function(e){
    e.preventDefault();
    if(e.target.elements.addTodo.value !== "") {
        todos.push(
            {text: e.target.elements.addTodo.value, 
                completed: false
            });
        saveTodos(todos);
        renderTodos(todos, filters);
        e.target.elements.addTodo.value = ""; //Clear the input field
    }
});

