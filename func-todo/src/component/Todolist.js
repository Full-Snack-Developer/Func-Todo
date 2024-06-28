import React, { useState, useContext, useEffect, useRef } from "react";
import { themeContext } from "../context/themeProvider";
import Todoform from "./Todoform";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { FILTER } from "../reducer/filterReducer";
import { fetchTodoData } from "../action/apiTodoAction";
uuidv4();

function Todolist() {
  const contextTheme = useContext(themeContext);
  const scrollRef = useRef(null);
  const dataRef = useRef(null);
  // const todoList = useSelector((state) => state.apiReducer.list);
  const todoList = useSelector((state) => state.todoReducer.list);
  const currentFilter = useSelector((state) => state.filterReducer.filter);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const dispatch = useDispatch();
  debugger
  //API DATA
  useEffect(() => {
    fetchTodoData().then((response) => {
      dispatch(response);
    });
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        if (scrollTop + clientHeight >= scrollHeight) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const filteredTODO = todoList.filter((todoList) => {
    if (currentFilter === FILTER.ALL){
      debugger
      return true;
    };
    if (currentFilter === FILTER.DONE){
      debugger
      return todoList.status === true;
    } 
    if (currentFilter === FILTER.DOING){
      debugger
      return todoList.status === false;
    }
    return true;
  });

  const displayedTODO = filteredTODO.slice(0, page * itemsPerPage);

  const selectTodo = (id) => {
    const selectedTodo = todoList.find((todo) => todo.id === id);
    if (selectedTodo) {
      if (dataRef.current) {
        dataRef.current.updateValue(selectedTodo.id, selectedTodo.task);
      }
    }
  };

  return (
    <div className={`${contextTheme.theme} Todolist `} ref={scrollRef}>
      <h1>Todos</h1>
      <Todoform ref={dataRef} />
      {displayedTODO.map((todo) => (
        <Todo
          todoList={todoList}
          task={todo}
          key={todo.id}
          selectTodo={selectTodo}
        />
      ))}
      <Footer />
    </div>
  );
}
export default Todolist;
