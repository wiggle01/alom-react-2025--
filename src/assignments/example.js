import { useState } from "react";

function Example() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    setTodos((prev) => [todo, ...prev]);
    setTodo("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>My To Dos ({todos.length})</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your to-do"
          value={todo}
          onChange={handleChange}
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px", marginLeft: "8px" }}>
          Add To-Do
        </button>
      </form>

      <hr />

      <ul style={{ marginTop: "20px" }}>
        {todos.map((item, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Example;