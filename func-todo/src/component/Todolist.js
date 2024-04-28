import React, { useState, useContext, useEffect, useRef } from "react";
import { themeContext } from "../context/themeProvider";
import Todoform from "./Todoform";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";
uuidv4();

function Todolist() {
  const contextTheme = useContext(themeContext);
  const [todos, setTodos] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, itemsPerPage: 5 });
  const [filteredTodos, setFilteredTodos] = useState([]);
  const scrollRef = useRef(null);
  const dataRef = useRef(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
      if (
        scrollTop + clientHeight >= scrollHeight &&
        todos.length > pagination.page * pagination.itemsPerPage
      ) {
        setTimeout(() => {
          setPagination((prevPagination) => ({
            ...prevPagination,
            page: prevPagination.page + 1,
          }));
        }, 1000);
      }
    };

    scrollRef.current.addEventListener("scroll", handleScroll);

    return () => {
      scrollRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [todos, pagination]);

  useEffect(() => {
    const filteredItems = todos.filter((todo) => {
      if (filter === "all") {
        return true;
      } else if (filter === "done") {
        return todo.complete;
      } else if (filter === "doing") {
        return !todo.complete;
      }
    });

    setFilteredTodos(filteredItems);
  }, [todos, filter]);

  const addTodo = (todo) => {
    if (todo.trim() === "") {
      return;
    }
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, complete: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleShowAll = () => {
    setFilter("all");
  };
  const handleShowDone = () => {
    setFilter("done");
  };
  const handleShowDoing = () => {
    setFilter("doing");
  };
  return (
    <div className={contextTheme.theme}>
      <div className="Todolist" ref={scrollRef}>
        <h1>Todos</h1>
        <Todoform addTodo={addTodo} />
        {filteredTodos
          .slice(0, pagination.page * pagination.itemsPerPage)
          .map((todo) => (
            <Todo
              task={todo}
              key={todo.id}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              // dataRef={dataRef}
            />
          ))}
        <Footer
          handleShowAll={handleShowAll}
          handleShowDone={handleShowDone}
          handleShowDoing={handleShowDoing}
        />
      </div>
    </div>
  );
}
export default Todolist;
