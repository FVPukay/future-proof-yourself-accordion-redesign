import React, { Component } from "react";
import Accordion from '../../components/Accordion';
import Navbar from "../../components/Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Accordion name={"5YR Future"} placeholder={"Add new 5YR objective"} />
        <Accordion name={"Theme of the year"} placeholder={"Add your theme of the year"} />
      </div>
    );
  }
}

export default App;
