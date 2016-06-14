import { List, Map } from 'immutable';

const empty = List([]);

export default function(state, action) {
  const todos = state || empty;
  switch (action.type) {
    case 'ADD_TODO':
      return todos.push(Map(action.payload));
    case 'TOGGLE_TODO':
      return todos.map(t => {
        if (t.get('id') === action.payload) {
          return t.update('isDone', isDone => !isDone);
        }
        return t;
      });
    default:
      return todos;
  }
}
