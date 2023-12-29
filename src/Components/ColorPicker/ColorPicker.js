import { Component } from "react";
import "./ColorPicker.css";

class ColorPicker extends Component {
  state = {
    activeColorIdx: 0,
  };

  makeOptionClassName = (index) => {
    const optionClasses = ["color__item"];
    if (index === this.state.activeColorIdx) {
      optionClasses.push("ColorPicker__item--active");
    }
    return optionClasses.join(" ");
  };

  setActiveIndex = (index) => {
    this.setState({ activeColorIdx: index });
  };

  render() {
    const { colors } = this.props;
    const { activeColorIdx } = this.state;
    const { label } = colors[activeColorIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Color: {label}</p>
        <ul className="color__list">
          {colors.map(({ color, label }, index) => (
            <li
              key={label}
              className={this.makeOptionClassName(index)}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIndex(index)}></li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ColorPicker;
