import React, { PropTypes } from 'react';

const Todo = ({ todo }) => {
  if (todo.get('isDone')) {
    return <strike>{todo.get('text')}</strike>;
  }
  return <span>{todo.get('text')}</span>;
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default Todo;
