import { Component } from "react";
import Counter from "Components/Counter";
import Dropdown from "Components/Dropdown";
import Section from "Components/Section";
import "./App.css";
import ColorPicker from "Components/ColorPicker";

// import colors from "../ColorPicker/colors.json";
const colors = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607088" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F5085" },
];

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        <ColorPicker colors={colors} />
      </div>
    );
  }
}

export default App;
