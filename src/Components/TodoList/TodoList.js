import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo, children }) => {
  return (
    <>
      <ul className="todo">
        {todos.map(({ id, text }) => (
          <li key={id} className="todo-item">
            <p>{text}</p>
            <button
              type="button"
              className="delete-btn"
              onClick={() => onDeleteTodo(id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {children}
    </>
  );
};

export default TodoList;
