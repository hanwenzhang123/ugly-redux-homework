import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function InputField(props) {
  return (
    <div>
      <h1> TO-DO LIST </h1>
      <input
        type="text"
        placeholder="Enter Task"
        onChange={props.textHandler}
      />
      <button onClick={props.addHandler}>ADD</button>
      <select>
        <option>***sort***</option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  textHandler: (item) => dispatch(actions.textAction(item)),
  addHandler: (todo) => dispatch(actions.addAction(todo)),
  sortHandler: (value) => dispatch(actions.sortAction(value)),
});

export default connect(null, mapDispatchToProps)(InputField);
