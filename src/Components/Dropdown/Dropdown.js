import React, { Component } from "react";
import "./Dropdown.css";

class Dropdown extends Component {
  state = {
    visible: false,
  };

  showMenuToggle = () => {
    this.setState((prevState) => ({ visible: !prevState.visible }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown-toggle"
          onClick={this.showMenuToggle}>
          {visible ? <p>Hide</p> : <p>Show</p>}
        </button>
        {visible && <div className="dropdown-menu">Menu</div>}
      </div>
    );
  }
}

export default Dropdown;
