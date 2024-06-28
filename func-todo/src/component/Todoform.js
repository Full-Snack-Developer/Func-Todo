import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../action/addTodoAction";
import { useDispatch, useSelector } from "react-redux";
import { postData } from "../API/todoData.js";
import { editTodo } from "../action/editTodoAction.js";
import { editData } from "../API/todoData.js";
import { statusTodo } from "../action/statusTodoAction.js";


const Todoform = forwardRef(({ ...props }, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const todoList = useSelector((state) => state.todoReducer.list);

  useEffect(() => {
    if (id !== null) {
      const selectedTodo = props.todoList?.find((todo) => todo.id === id);
      debugger
      if (selectedTodo) {
        setValue(selectedTodo.task);
      }
    }
  }, [id, props.todoList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      if (id !== null) {
        const todoID = todoList.find((todo) => todo.id === id);
        const updatedTodo = {...todoID,  task: value };
        const actionUpdateTodo = editTodo(updatedTodo);
        dispatch(actionUpdateTodo);
        editData(id, updatedTodo);
      } else {
        const newTodo = {
          task: value,
          status: false,
          id: todoList.length +1
        };
        const actionAddTodo = addTodo(newTodo);
        dispatch(actionAddTodo);
        postData(newTodo);
      }
      setValue("");
      setId(null);
    }
  };

  useImperativeHandle(ref, () => ({
    updateValue(id, value) {
      setId(id);
      setValue(value);
    },
    clearId() {
      setId(null);
    },
  }));

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
          autoFocus
        />
      </form>
    </div>
  );
});

export default Todoform;
