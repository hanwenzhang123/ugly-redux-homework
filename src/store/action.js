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
const addAction = (todo) => {
  return {
    type: "ADD",
    payload: todo,
  };
};
const textAction = (item) => {
  return {
    type: "TEXT",
    payload: item,
  };
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
export const timer = () => (dispatch, getState) => {
  let timer = null;
  clearInterval(timer);
  if (getState().isRunning === true)
    timer = setInterval(() => {
      dispatch(incAction());
    }, 1000);
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
