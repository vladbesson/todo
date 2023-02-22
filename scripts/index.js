import TodoList from "./TodoList.js";
import TodoListForm from "./TodoListForm.js";
import TodoListItem from "./TodoListItem.js";

const todos = [
  "Сделать проектную работу",
  "Полить цветы",
  "Пройти туториал по Реакту",
  "Сделать фронт для своего проекта",
  "Погулять с собакой",
  "Разобраться в замыканиях",
  "Решить задачу на Codewars",
];

new TodoList(
  todos,
  (...args) => new TodoListForm(...args),
  (...args) => new TodoListItem(...args)
).render(document.querySelector("#app"));
