// 공식사이트 : redux.js.org

import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
});

console.log(store.getState());

// Actions - then an object that gets sent to the store
store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
  type: 'DECREMENT'
});

console.log(store.getState());

store.dispatch({
  type: 'RESET'
});

console.log(store.getState());
