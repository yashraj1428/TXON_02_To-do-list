document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    if (todoInput.value === '') {
      alert('Please enter a task.');
      return;
    }
  
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    const taskText = document.createElement('span');
  
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    taskText.textContent = todoInput.value;
  
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  
    todoInput.value = '';
  });
  
  document.getElementById('todo-list').addEventListener('click', function(e) {
    if (e.target.className === 'delete-button') {
      e.target.parentNode.remove();
    }
  });
  