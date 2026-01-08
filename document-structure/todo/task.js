  const tasksForm = document.getElementById('tasks__form');
  const taskInput = document.getElementById('task__input');
  const tasksList = document.getElementById('tasks__list');

  const createTaskElement = (taskText) => {
    const taskTemplate = `
      <div class="task">
        <div class="task__title">
          ${taskText}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>
    `;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = taskTemplate;
    const taskElement = tempDiv.firstElementChild;

    const taskRemove = taskElement.querySelector('.task__remove');

    taskRemove.addEventListener('click', (e) => {
      e.preventDefault();
      taskElement.remove();
    });

    return taskElement;
  };

  const addTask = (e) => {
    e.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (taskText) {
      const newTask = createTaskElement(taskText);
      tasksList.appendChild(newTask);
      taskInput.value = '';
    }
  };

  tasksForm.addEventListener('submit', addTask);