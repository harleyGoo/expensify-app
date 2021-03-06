import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'pdjfks',
    description: 'January Rent',
    note: 'This is the final payment for that address',
    amount: 60000,
    createAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // could be date or amount
    startDate: undefined,
    endDate: undefined
  }
};
