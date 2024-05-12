import React, { useState, useContext, useEffect, useRef } from "react";
import { themeContext } from "../context/themeProvider";
import Todoform from "./Todoform";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../action/addTodoAction";
uuidv4();

function Todolist() {
  const contextTheme = useContext(themeContext);
  // const [todos, setTodos] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, itemsPerPage: 5 });
  const [filteredTodos, setFilteredTodos] = useState([]);
  const scrollRef = useRef(null);
  const dataRef = useRef(null);
  const [filter, setFilter] = useState("all");

  //Redux
  const todoList = useSelector((state) => state.addTodo.list);
  const dispatch = useDispatch();
  console.log(todoList);

  const addNewTodo = (task) => {
    const newTODO = {
      id: uuidv4(),
      task: task,
      complete: false,
    };
    const actionAddTODO = addTodo(newTODO);
    dispatch(actionAddTODO);
  };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, clientHeight, scrollHeight } = scrollRef.current;
  //     if (
  //       scrollTop + clientHeight >= scrollHeight &&
  //       todos.length > pagination.page * pagination.itemsPerPage
  //     ) {
  //       setTimeout(() => {
  //         setPagination((prevPagination) => ({
  //           ...prevPagination,
  //           page: prevPagination.page + 1,
  //         }));
  //       }, 1000);
  //     }
  //   };

  //   scrollRef.current.addEventListener("scroll", handleScroll);

  //   return () => {
  //     scrollRef.current.removeEventListener("scroll", handleScroll);
  //   };
  // }, [todos, pagination]);

  // useEffect(() => {
  //   const filteredItems = todos.filter((todo) => {
  //     if (filter === "all") {
  //       return true;
  //     } else if (filter === "done") {
  //       return todo.complete;
  //     } else if (filter === "doing") {
  //       return !todo.complete;
  //     }
  //   });

  //   setFilteredTodos(filteredItems);
  // }, [todos, filter]);

  // const addTodo = (todo, id) => {
  //   if (todo.trim() === "") {
  //     return;
  //   }

  //   const existingTodo = todos.find((item) => item.id === id);

  //   if (existingTodo) {
  //     setTodos((prevTodos) =>
  //       prevTodos.map((item) =>
  //         item.id === id ? { ...item, task: todo } : item
  //       )
  //     );
  //     dataRef.current.clearId();
  //   } else {
  //     setTodos((prevTodos) => [
  //       ...prevTodos,
  //       { id: uuidv4(), task: todo, complete: false },
  //     ]);
  //   }
  // };

  // const toggleComplete = (id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, complete: !todo.complete } : todo
  //     )
  //   );
  // };

  // const deleteTodo = (id) => {
  //   setTodos(todos.filter((todo) => todo.id !== id));
  // };

  // const handleShowAll = () => {
  //   setFilter("all");
  // };
  // const handleShowDone = () => {
  //   setFilter("done");
  // };
  // const handleShowDoing = () => {
  //   setFilter("doing");
  // };

  // const selectTodo = (id) => {
  //   const getValue = todos.find((todo) => todo.id === id);
  //   dataRef.current.updateValue(id, getValue.task);
  // };

  return (
    <div className={`${contextTheme.theme} Todolist `} ref={scrollRef}>
      <h1>Todos</h1>
      <Todoform addNewTodo={addNewTodo} ref={dataRef} />
      {todoList.map((todo) => (
        <Todo
          todoList={todoList}
          task={todo}
          key={todo.id}
          toggleComplete={() => {}}
          deleteTodo={() => {}}
          selectTodo={() => {}}
        />
      ))}
      <Footer
        handleShowAll={() => {}}
        handleShowDone={() => {}}
        handleShowDoing={() => {}}
      />
    </div>
  );
}
export default Todolist;
