import React, { Component } from "react";
import { connect } from "react-redux";

import InputField from "./InputField";
import ItemList from "./ItemList";
import Card from "../UI/Card";
import * as actions from "../../store/action";

class TdList extends Component {
  render() {
    const { list } = this.props;
    return (
      <Card>
        <InputField />
        <ItemList onDisplay={list} />
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.tdListReducer,
});

const mapDispatchToProps = (dispatch) => ({
  addHandler: () => dispatch(actions.addAction()),
  deleteHandler: () => dispatch(actions.deleteAction()),
  sortHandler: () => dispatch(actions.sortAction()),
});

const ConnectedTdList = connect(mapStateToProps, mapDispatchToProps)(TdList);

export default ConnectedTdList;
