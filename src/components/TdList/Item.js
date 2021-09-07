import React from "react";
import { connect } from "react-redux";
import * as actions from "../../store/action";

function Item(props) {
  const handledelete = (item) => {
    props.deleteHandler(item.id)
  }

  return (
    <div>
      <li>
        {props.item}
        <button onClick={handledelete}>x</button>
      </li>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  deleteHandler: (id) => dispatch(actions.deleteAction(id)),
});

export default connect(null, mapDispatchToProps)(Item);
