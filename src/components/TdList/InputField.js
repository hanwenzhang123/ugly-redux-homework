import React, { Component } from "react";
class InputField extends Component {
  render() {
    return (
      <div>
        <h1> TO-DO LIST </h1>
        <input type="text" placeholder="Enter Task" />
        <button>ADD</button>
        <select>
          <option>***sort***</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    );
  }
}

export default InputField;
