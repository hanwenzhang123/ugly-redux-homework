import React, { Component } from "react";

import InputField from "./InputField";
import ItemList from "./ItemList";
import Card from "../UI/Card";

class TdList extends Component {
  render() {
    return (
      <Card>
        <InputField />
        <ItemList />
      </Card>
    );
  }
}

export default TdList;
