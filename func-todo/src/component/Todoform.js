import React, {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";

const Todoform = forwardRef(({ addTodo, ...props }, ref) => {
  const [value, setValue] = useState("");
  const inputRef = useRef(null);
  const [id, setId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, id);
    setValue("");
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
        />
      </form>
    </div>
  );
});

export default Todoform;
