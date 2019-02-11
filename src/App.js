import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    name: "Deb"
  };

  nameChangedHandler = event => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    const style = {
      textAlign: "center",
      color: "#6545d8"
    };

    return (
      <div className="App">
        <h1 style={style}>Assignment 1: React the Complete Guide</h1>
        <UserInput name={this.state.name} changed={this.nameChangedHandler} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
      </div>
    );
  }
}

export default App;
