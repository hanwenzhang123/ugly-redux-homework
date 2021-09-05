import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "../UI/Card";
import Count from "./Count";
import ButtonRow from "./ButtonRow";
import * as actions from "../../store/action";

class Counter extends Component {
  render() {
    const {
      number,
      incHandler,
      decHandler,
      oddHandler,
      asyncHandler,
      resetHandler,
      timerHandler,
    } = this.props;
    return (
      <Card>
        <Count num={number} />
        <ButtonRow clickHandler={incHandler} value="Increment +1" />
        <ButtonRow clickHandler={decHandler} value="Decrement -1" />
        <ButtonRow clickHandler={oddHandler} value="Increment-If-Odd" />
        <ButtonRow clickHandler={asyncHandler} value="Async-Inc" />
        <ButtonRow clickHandler={resetHandler} value="Reset" />
        <ButtonRow
          clickHandler={timerHandler}
          value={number ? "TIMER STOP" : "TIMER START"}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.counterReducer,
});

const mapDispatchToProps = (dispatch) => ({
  incHandler: () => dispatch(actions.incAction()),
  decHandler: () => dispatch(actions.decAction()),
  oddHandler: () => dispatch(actions.oddAction()),
  asyncHandler: () => dispatch(actions.asyncAction()),
  resetHandler: () => dispatch(actions.resetAction()),
  timerHandler: () => dispatch(actions.timerAction()),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default ConnectedCounter;
