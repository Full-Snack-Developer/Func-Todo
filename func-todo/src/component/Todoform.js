import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Todoform({ addTodo }) {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form className="Todoform" onSubmit={handleSubmit}>
        <input
          className="todo-input"
          type="text"
          placeholder="type something..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
          ref={inputRef}
        />
      </form>
    </div>
  );
}
