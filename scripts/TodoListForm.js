class TodoListForm {
  static _template = document.querySelector("#todo-form-template").content;

  constructor(container, createTodoListItem) {
    this._container = container;
    this._createTodoListItem = createTodoListItem;
  }

  _handleFormSubmit = (evt) => {
    evt.preventDefault();

    const input = this._view.querySelector("input");
    const text = input.value;

    this._createTodoListItem(text);

    input.value = "";
  };

  render() {
    this._view = TodoListForm._template.cloneNode(true).children[0];

    this._view.addEventListener("submit", this._handleFormSubmit);

    this._container.append(this._view);
  }
}

export default TodoListForm;
