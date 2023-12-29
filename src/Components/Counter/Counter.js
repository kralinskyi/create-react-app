import { Component } from "react";
import "./Counter.css";
import Controls from "./Controls";
import Section from "Components/Section";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleDecrementClick = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  handleIncrementClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <>
        <Section>
          <span>{this.state.count}</span>
          <Controls
            onDecrement={this.handleDecrementClick}
            onIncrement={this.handleIncrementClick}
          />
        </Section>
      </>
    );
  }
}
export default Counter;
