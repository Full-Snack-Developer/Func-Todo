import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteTodo } from "../action/deleteTodoAction";
import { statusTodo } from "../action/statusTodoAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, editStatus } from "../API/todoData.js";

export default function Todo({ task, selectTodo }) {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.list);

  const deleteNewTodo = (id) => {
    dispatch(deleteTodo(id));
    // deleteData(id);
  };

  const toggleComplete = (id) => {
    const statusID = todoList.find((todo) => todo.id === id);
    const updatedStatus = {...statusID, status : !statusID.status}
    dispatch(statusTodo(id));
    // editStatus(id, updatedStatus)
  };

  return (
    <div className="Todo">
      <p
        className={task.status ? "true" : ""}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="Todo-actions">
        <FontAwesomeIcon
          icon={faPenToSquare}
          onClick={() => selectTodo(task.id)}
          className="Todo-icon edit-icon"
        />
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => deleteNewTodo(task.id)}
          className="Todo-icon delete-icon"
        />
      </div>
    </div>
  );
}
