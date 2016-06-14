import React, { PropTypes } from 'react';
import Todo from './todo';

const TodoList = ({ todos, toggleTodo, addTodo }) => {
  const onSubmit = (event) => {
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which === 13);
    const isLongEnough = text.length > 0;

    if (isEnterKey && isLongEnough) {
      input.value = '';
      addTodo(text);
    }
  };

  const toggleClick = id => () => toggleTodo(id);

  return (
    <div className="todo">
      <input
        type="text"
        className="todo__entry"
        placeholder="Add todo"
        onKeyDown={onSubmit}
      />
      <ul className="todo__list">
        {todos.map(t => (
          <li
            key={t.get('id')}
            className="todo__item"
            onClick={toggleClick(t.get('id'))}
          >
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.object.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default TodoList;
