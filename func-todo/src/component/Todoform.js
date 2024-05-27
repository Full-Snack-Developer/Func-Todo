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
import { getData } from "../API/todoData.js";

const Todoform = forwardRef(({ ...props }, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [id, setId] = useState(null);

  const addNewTodo = (task) => {
    const newTODO = {
      id: uuidv4(),
      task: task,
      status: false,
      eidt: false,
    };

    const actionAddTODO = addTodo(newTODO);
    dispatch(actionAddTODO);
    setValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addNewTodo(value);
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
