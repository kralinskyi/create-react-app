import { Component } from "react";
import "./App.css";
// import Counter from "Components/Counter";
// import Dropdown from "Components/Dropdown";
// import Section from "Components/Section";
// import ColorPicker from "Components/ColorPicker";
import TodoList from "Components/TodoList";
import initialTodos from "../../todos.json";

// import colors from "../ColorPicker/colors.json";
// const colors = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607088" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F5085" },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <div className="app">
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker colors={colors} /> */}
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo}>
          <p>Total todos: {todos.length}</p>
          <p>Completed todos: {completedTodos}</p>
        </TodoList>
      </div>
    );
  }
}

export default App;
