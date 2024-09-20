// Add a new task to the list when the "Add Task" button is clicked.

// Hint: Use createElement() and appendChild() to add a new li element.

//TODO add functionality to auto increment task number
document.getElementById('add-task').addEventListener('click', function() {
    const newTask = document.createElement('li');
    newTask.innerText="Task 3";
    document.getElementById('todo-list').appendChild(newTask);
});

// document.getElementById('remove-task').addEventListener('click', function() {
//     const taskList = document.getElementById('todo-list');
//     if (taskList.lastElementChild) {
//         taskList.removeChild(itemList.lastElementChild);
//     }
// });

