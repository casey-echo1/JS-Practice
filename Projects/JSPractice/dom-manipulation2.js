// Get reference to the todo list
const todoList = document.getElementById('todo-list');

// Function to add a new task with auto-incrementing number
document.getElementById('add-task').addEventListener('click', function() {
    const taskCount = todoList.children.length + 1;
    const newTask = document.createElement('li');
    newTask.innerText = `Task ${taskCount}`;
    todoList.appendChild(newTask);
});

// Function to remove the last task
document.getElementById('remove-task').addEventListener('click', function() {
    if (todoList.lastElementChild) {
        todoList.removeChild(todoList.lastElementChild);
    }
});

// Function to clear the entire list
document.getElementById('clear-list').addEventListener('click', function() {
    todoList.innerHTML = '';
});

// Function to toggle the 'completed' class
function toggleCompleted(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
}
// Add event listener for toggling completed status
todoList.addEventListener('click', toggleCompleted);

