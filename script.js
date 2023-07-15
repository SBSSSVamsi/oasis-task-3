document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.getElementById('task-input');
    const descriptionInput = document.getElementById('description-input');
    const task = taskInput.value;
    const description = descriptionInput.value;
    taskInput.value = '';
    descriptionInput.value = '';
  
    if (task) {
      const date = new Date();
      const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  
      const tableRow = document.createElement('tr');
      tableRow.innerHTML = `
        <td>${task}</td>
        <td>${description}</td>
        <td>${formattedDate}</td>
        <td>
          <button class="complete-button">Complete</button>
          <button class="delete-button">Delete</button>
        </td>
      `;
  
      const pendingTasksList = document.getElementById('pending-tasks-list');
      pendingTasksList.appendChild(tableRow);
    }
  });
  
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('complete-button')) {
      const tableRow = e.target.parentNode.parentNode;
      const completedTasksList = document.getElementById('completed-tasks-list');
      completedTasksList.appendChild(tableRow);
      e.target.remove();
      tableRow.classList.add('completed');
    }
  
    if (e.target.classList.contains('delete-button')) {
      const tableRow = e.target.parentNode.parentNode;
      tableRow.remove();
    }
  });
  