class TodoList {
  static _template = document.querySelector("#todo-list-template").content;

  constructor(items, createTodoListForm, createTodoListItem) {
    this._items = items;
    this._createTodoListForm = createTodoListForm;
    this._createTodoListItem = createTodoListItem;
  }

  _addNewCard = (item) => {
    this._createTodoListItem(
        item,
        this._view.querySelector(".todos__list"),
        this._addNewCard
      ).render()
  }

  render = (container) => {
    this._view = TodoList._template.cloneNode(true).children[0];

    this._createTodoListForm(this._view.querySelector("#form"), this._addNewCard).render();

    this._items.forEach((item) => this._addNewCard(item));

    container.append(this._view);
  };
}

export default TodoList;
