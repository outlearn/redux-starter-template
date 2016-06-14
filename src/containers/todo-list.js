import { connect } from 'react-redux';
import TodoListComponent from '../components/todo-list';
import { addTodo, toggleTodo } from '../actions';

const mapStateToProps = (state) => ({
  todos: state
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: text => dispatch(addTodo(text)),
  toggleTodo: id => dispatch(toggleTodo(id))
});

export const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListComponent);
