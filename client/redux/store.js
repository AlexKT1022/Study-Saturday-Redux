import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "redux-logger";
import axios from "axios";
import thunkMiddleware from "redux-thunk";

// ACTION TYPES go here:
const ADD_STUDENT = "ADD_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";
const DISPLAY_STUDENT = "DISPLAY_STUDENT";

// ACTION CREATORS go here:
const addStudent = (student) => {
  return {
    type: ADD_STUDENT,
    student,
  };
};

const removeStudent = (student) => {
  return {
    type: REMOVE_STUDENT,
    student,
  };
};

const displayStudent = () => {};

// THUNK CREATORS go here:

const initialState = {
  students: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.student],
      };
    case REMOVE_STUDENT:
      return {
        ...state,
        students: [...state.students, action.student],
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

// dispatch your own actions here to test your store functionality:
store.dispatch({ type: "HELLO_WORLD" });

// ^ you can see the logs above in your console, thanks to redux-logger!

export default store;
