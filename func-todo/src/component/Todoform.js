import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../action/addTodoAction";
import { useDispatch } from "react-redux";
import { postData } from "../API/todoData.js";
import { editTodo } from "../action/editTodoAction.js";
import { editData } from "../API/todoData.js";

const Todoform = forwardRef(({ ...props }, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [id, setId] = useState(null);

  useEffect(() => {
    if (id !== null) {
      const selectedTodo = props.todoList?.find((todo) => todo.id === id);
      if (selectedTodo) {
        setValue(selectedTodo.task);
      }
    }
  }, [id, props.todoList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      if (id !== null) {
        const updatedTodo = { id, task: value, status: false, edit: false };
        const actionUpdateTodo = editTodo(updatedTodo);
        dispatch(actionUpdateTodo);
        editData(id, value);
      } else {
        const newTodo = {
          task: value,
        };
        const actionAddTodo = addTodo(newTodo);
        dispatch(actionAddTodo);
        postData({ task: value });
      }

      setValue("");
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
