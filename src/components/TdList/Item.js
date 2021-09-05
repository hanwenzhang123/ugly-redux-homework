import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function Item(props) {
  return (
    <div>
      <li>
        {props.item}
        <button onClick={props.deleteHandler}>x</button>
      </li>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  deleteHandler: (id) => dispatch(actions.deleteAction(id)),
});

export default connect(null, mapDispatchToProps)(Item);
