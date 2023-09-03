// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const newTaskItem = document.createElement('li');
      
      // Create a div to hold task content and buttons
      const taskDiv = document.createElement('div');
      taskDiv.className = 'task';
      
      // Create a checkbox button
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'task-checkbox';
      
      // Create a label for the task text
      const taskLabel = document.createElement('label');
      taskLabel.textContent = taskText;
      
      // Create a delete button
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.className = 'delete-button';
      
      // Append elements to the task div
      taskDiv.appendChild(checkbox);
      taskDiv.appendChild(taskLabel);
      taskDiv.appendChild(deleteButton);
      
      // Append the task div to the list
      newTaskItem.appendChild(taskDiv);
      taskList.appendChild(newTaskItem);
  
      // Clear the input field
      taskInput.value = '';
      
      // Add event listener to delete button
      deleteButton.addEventListener('click', function () {
        taskList.removeChild(newTaskItem);
      });
      
      // Add event listener to checkbox
      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          taskLabel.style.textDecoration = 'line-through';
        } else {
          taskLabel.style.textDecoration = 'none';
        }
      });
    }
  }
  
  // Event listener to add a task when the "Add" button is clicked
  document.getElementById('addTask').addEventListener('click', addTask);
  
  // Event listener to add a task when the Enter key is pressed
  document.getElementById('task').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTask();
    }
  });
  