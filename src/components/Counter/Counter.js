import React, { Component } from "react";

import Card from "../UI/Card";
import Count from "./Count";
import ButtonRow from "./ButtonRow";

class Counter extends Component {
  render() {
    return (
      <Card>
        <Count />
        <ButtonRow />
      </Card>
    );
  }
}

export default Counter;
