// get task list and form elements
const taskList = document.getElementById('task-list');
const taskForm = document.getElementById('task-form');

// create an array to store tasks
let tasks = [];

// function to add task to list
function addTask(task) {
  tasks.push(task);
  renderTaskList();
}

// function to render task list
function renderTaskList() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const taskHTML = `
      <li>
        <span>${task.name}</span>
        <span>${task.date}</span>
        <span>${task.time}</span>
        <button class="delete-btn" data-index="${index}">Delete</button>
      </li>
    `;
    taskList.insertAdjacentHTML('beforeend', taskHTML);
  });
}

// function to delete task from list
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTaskList();
}

// add event listener to form submit
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = document.getElementById('task-name').value;
  const taskDate = document.getElementById('task-date').value;
  const taskTime = document.getElementById('task-time').value;
  const task = { name: taskName, date: taskDate, time: taskTime };
  addTask(task);
  taskForm.reset();
});

// add event listener to delete buttons
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    const index = e.target.dataset.index;
    deleteTask(index);
  }
});