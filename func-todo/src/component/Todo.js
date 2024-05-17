import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export default function Todo({
  task,
  toggleComplete,
  deleteNewTodo,
  selectTodo,
}) {
  return (
    <div className="Todo">
      <p
        className={`${task.status ? "true" : ""}`}
        onClick={() => {
          toggleComplete(task.id, task.status);
        }}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => selectTodo(task.id)}
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteNewTodo(task.id)}
        />
      </div>
    </div>
  );
}
