const createTaskElement = (taskText) => {
  const container = document.createElement('div');
  
  container.insertAdjacentHTML('beforeend', `
    <div class="task">
      <div class="task__title">
        ${taskText}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>
  `);
  
  const taskElement = container.firstElementChild;
  const taskRemove = taskElement.querySelector('.task__remove');
  
  taskRemove.addEventListener('click', (e) => {
    e.preventDefault();
    taskElement.remove();
  });

  return taskElement;
};