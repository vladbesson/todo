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

const createTask = (taskName) => {
  const template = `
    <li class="todo-item">
      <span class="todo-item__text"></span>
      <button class="todo-item__edit"></button>
      <button class="todo-item__copy"></button>
      <button class="todo-item__del"></button>
    </li>
  `;

  const container = document.createElement('div');
  container.innerHTML = template;
  container.querySelector('.todo-item__text').textContent = taskName;

  return container.firstElementChild;
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