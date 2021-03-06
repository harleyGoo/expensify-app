// 공식사이트 : redux.js.org
import { createStore } from 'redux';

// const add = ({ a, b }, c) => {
//   return a + b + c;
// }

// console.log(add({ a: 1, b: 12 }, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

// example of not pure function
// let a = 10;
// const add = () => {
//   return a + b; // the output of this function depends on global variable
// };

// this is pure function
// const add = (a, b) => {
//   return a + b; // the output of add only depends on the input
// };

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - then an object that gets sent to the store
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// store.dispatch({
//   type:'DECREMENT',
//   decrementBy: 10
// });

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());

// store.dispatch({
//   type: 'RESET'
// });

store.dispatch(setCount({ count: 100 }));

// store.dispatch({
//   type: 'SET',
//   count: 10
// });

store.dispatch(resetCount());
