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
const template = document.querySelector('#todo-item-template');

const formSubmitHandler = (evt) => {
  evt.preventDefault();
  const taskName = input.value;
  renderTask(taskName);
  input.value = '';
};

const createTask = (taskName) => {
  const task = template
    .content
    .querySelector('.todo-item')
    .cloneNode(true);

  const textElement =  task.querySelector('.todo-item__text');
  textElement.textContent = taskName;

  const deleteBtn = task.querySelector('.todo-item__del');
  deleteBtn.addEventListener('click', () => {
    task.remove();
  });

  const duplicateBtn = task.querySelector('.todo-item__copy');
  duplicateBtn.addEventListener('click', () => {
    renderTask(taskName);
  });

  const editTodo = () => {
    textElement.contentEditable = false;
    textElement.removeEventListener('blur',editTodo);
  }

  const editBtn = task.querySelector('.todo-item__edit');
  editBtn.addEventListener('click', () => {
    textElement.contentEditable = true;
    textElement.focus();
    textElement.addEventListener('blur', editTodo);
  });

  return task;
};

const renderTask = (taskName) => {
  todoList.append(createTask(taskName));
};

todos.forEach((item) => {
  renderTask(item);
});

form.addEventListener('submit', formSubmitHandler);