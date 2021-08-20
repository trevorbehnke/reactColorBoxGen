import React, { Component } from "react";
import "./App.css";
import BoxList from "./BoxList";

export default class App extends Component {
  render() {
    return (
      <div className="to-root">
        <BoxList />
      </div>
    );
  }
}
