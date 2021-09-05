import React from "react";
import Item from "./Item";
import { connect } from "react-redux";

function ItemList(props) {
  if (props.todo.length === 0) {
    return <p>Found No To-do Items.</p>;
  }

  return (
    <div className="App">
      {props.todo.map((item, index) => (
        <Item id={index} key={index} item={item} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todo: state.tdListReducer.todo,
});

export default connect(mapStateToProps, null)(ItemList);
