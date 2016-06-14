import React from 'react';
import { render } from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoList } from './containers/todo-list';

const store = createStore(reducer, null, compose(
  // Initialize devToolsExtension iff...
  // - we're getting rendered in a browser (i.e. not server-side)
  // - the browser extension is enabled
  typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ?
    window.devToolsExtension() :
    f => f
));

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById('app')
);
