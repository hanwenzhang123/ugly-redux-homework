//COUNTER
const incAction = () => {
  return {
    type: "INCREMENT",
  };
};
const decAction = () => {
  return {
    type: "DECREMENT",
  };
};
const oddAction = () => {
  return {
    type: "ODD",
  };
};
const resetAction = () => {
  return {
    type: "RESET",
  };
};
const timerAction = () => {
  return {
    type: "TIMER",
  };
};

let timer;
export const timerUpdate = () => (dispatch, getState) => {
    clearInterval(timer);
    timer = setInterval(() => {
        dispatch(incAction());
    }, 1000);
  }

export const timerStopUpdate = () => (dispatch, getState) =>
  clearInterval(timer);


//TO-DO LIST
const textAction = (item) => {
  return {
    type: "TEXT",
    payload: item,
  };
};

// const addAction = (todo) => {
//   return {
//     type: "ADD",
//     payload: todo, 
//   };
// };

const addAction = () =>  (dispatch, getState) => {
  let inputText = getState().tdListReducer.text;
  dispatch({
  type: "ADD",
  payload: inputText, 
    })
};

const deleteAction = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
const dropAction = (key) => {
  return {
    type: "DROP",
    payload: key,
  };
};
const sortAction = (value) => {
  return {
    type: "SORT",
    payload: value,
  };
};

export {
  incAction,
  decAction,
  oddAction,
  resetAction,
  timerAction,
  textAction,
  addAction,
  deleteAction,
  dropAction,
  sortAction,
};
