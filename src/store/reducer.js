import { combineReducers } from "redux";

const COUNT_INIT_STATE = 0;

const counterReducer = (state = COUNT_INIT_STATE, action) => {
  const asyncInc = () => {
    setTimeout(() => {
      return state + 1;
    }, 1000);
  };

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ODD":
      if (state % 2 !== 0) {
        return state + 1;
      } else {
        return state;
      }
    case "ASYNC": //need the middleware
      return asyncInc;
    case "RESET":
      return (state = 0);
    case "TIMER":
      return state - 1;
    default:
      return state;
  }
};

const TODO_INIT_STATE = ["Study Redux", "Do Homework"];

const tdListReducer = (state = TODO_INIT_STATE, action) => {
  const addItem = (inputText) => {
    const list = [...this.state.list];
    list.push(inputText);
    this.setState({ list });
  };

  const deleteItem = (id) => {
    const list = [...this.state.list];
    const updatedList = list.filter((item, index) => index !== id);
    this.setState({ list: updatedList });
  };

  const sortList = (value) => {
    const list = [...this.state.list];
    if (value === "asc") {
      const ascList = list.sort((a, b) => a.localeCompare(b));
      this.setState({ list: ascList });
    } else if (value === "desc") {
      const descList = list.sort((a, b) => b.localeCompare(a));
      this.setState({ list: descList });
    }
  };

  switch (action.type) {
    case "ADD":
      return addItem;
    case "DELETE":
      return deleteItem;
    case "SORT":
      return sortList;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counterReducer,
  tdListReducer,
});

export default rootReducer;

// const counterReducer = (state = COUNT_INIT_STATE, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return {
//         counter: state.counter + 1,
//         isRunning: state.isRunning,
//       };
//     case "DECREMENT":
//       return {
//         counter: state.counter - 1,
//         isRunning: state.isRunning,
//       };
//     case "ODD":
//       return {
//         counter: state % 2 !== 0 ? state + 1 : state,
//         isRunning: state.isRunning,
//       };
//     case "ASYNC":
//       const timer = setTimeout(() => {
//         return state + 1;
//       }, 1000);
//       return timer;
//     case "RESET":
//       return {
//         counter: (state.counter = 0),
//         isRunning: state.isRunning,
//       };
//     case "TIMER":
//       return {
//         counter: state.counter,
//         isRunning: !state.isRunning,
//       };
//     default:
//       return state;
//   }
// };
