import { combineReducers } from "redux";

const COUNT_INIT_STATE = {
  counter: 0,
  isRunning: false,
};

const counterReducer = (state = COUNT_INIT_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "ODD":
      return {
        ...state,
        counter: state.counter % 2 !== 0 ? state.counter + 1 : state.counter,
      };
    case "RESET":
      return {
        ...state,
        counter: (state.counter = 0),
      };
    case "TIMER":
      return {
        ...state,
        isRunning: !state.isRunning,
      };
    default:
      return state;
  }
};

const TODO_INIT_STATE = {
  todo: ["Study Redux", "Do Homework"],
  text: "",
};

const tdListReducer = (state = TODO_INIT_STATE, action) => {
  switch (action.type) {
    case "TEXT":
      return { ...state, text: action.payload };
    case "ADD":
      const addItem = state.todo.push(action.payload);
      return { ...state, todo: addItem, text: "" };
    case "DELETE":
      const deleteItem = state.todo.filter(
        (item, index) => index !== action.payload
      );
      return { ...state, todo: deleteItem };
    case "SORT":
      if (action.payload === "asc") {
        const ascList = state.todo.sort((a, b) => a.localeCompare(b));
        return { todo: ascList };
      } else if (action.payload === "desc") {
        const descList = state.todo.sort((a, b) => b.localeCompare(a));
        return { todo: descList };
      }
      break;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  counterReducer,
  tdListReducer,
});

export default rootReducer;
