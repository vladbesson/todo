class TodoListItem {
  static _template = document.querySelector('#todo-item-template').content;

  constructor(text, container, createTodoListItem) {
    this._text = text;
    this._container = container;
    this._createTodoListItem = createTodoListItem;
  }

  _handleTextBlur = () => {
    this._textElement.contentEditable = false;

    this._text = this._textElement.textContent;

    this._textElement.removeEventListener('blur',editTodo);
  }

  _removeItem = () => {
    this._view.remove();

    this._removeEventListeners();
  }

  _removeEventListeners = () => {
    this._view.querySelector('.todo-item__del').removeEventListener('click', this._removeItem);
  }

  _addEventListeners = () => {
    this._view.querySelector('.todo-item__del').addEventListener('click', this._removeItem);

    this._view.querySelector('.todo-item__copy').addEventListener('click', () => {
      this._createTodoListItem(this._text);
    });

    this._view.querySelector('.todo-item__edit').addEventListener('click', () => {
      this._textElement = this._view.querySelector('.todo-item__text');

      this._textElement.contentEditable = true;
      this._textElement.focus();
      this._textElement.addEventListener('blur', this._handleTextBlur);
    });
  }

  render() {
    this._view = TodoListItem._template.cloneNode(true).children[0];
    
    this._view.querySelector('.todo-item__text').textContent = this._text;

    this._addEventListeners();

    this._container.append(this._view);
  }
}

export default TodoListItem;