import { createStore } from 'redux';

// Define initial state
const initialState = {
  count: 0,
};

// Define a reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(counterReducer);

export default store;
