const todos = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const todoList = document.querySelector('.todos__list');
const form = document.querySelector('.todo-form');
const input = document.querySelector('.todo-form__input');
const template = document.querySelector('#todo-item-template')

const createTask = (taskName) => {
  const task = template
    .content
    .querySelector('.todo-item')
    .cloneNode(true);

  task.querySelector('.todo-item__text').textContent = taskName;

  const deleteBtn = task.querySelector('.todo-item__del');
  deleteBtn.addEventListener('click', () => {
    task.remove();
  });

  const duplicateBtn = task.querySelector('.todo-item__copy');
  duplicateBtn.addEventListener('click', () => {
    renderTask(taskName);
  });

  return task;
};

const renderTask = (taskName) => {
  todoList.append(createTask(taskName));
};

todos.forEach((item) => {
  renderTask(item);
});

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  const taskName = input.value;
  renderTask(taskName);
  input.value = '';
}

form.addEventListener('submit', formSubmitHandler);