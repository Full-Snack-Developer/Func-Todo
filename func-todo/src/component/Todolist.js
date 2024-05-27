import React, { useState, useContext, useEffect, useRef } from "react";
import { themeContext } from "../context/themeProvider";
import Todoform from "./Todoform";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";
import { useSelector, useDispatch } from "react-redux";
import { FILTER } from "../reducer/filterReducer";
import { getData } from "../API/todoData.js";
import { fetchData } from "../action/apiTodoAction";

uuidv4();

function Todolist() {
  const contextTheme = useContext(themeContext);
  const scrollRef = useRef(null);
  const dataRef = useRef(null);
  const todoList = useSelector((state) => state.todoReducer.list);
  const currentFilter = useSelector((state) => state.filterReducer.filter);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  //API DATA
  const [apiDATA, setApiDATA] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);

  useEffect(() => {
    dispatch(fetchData());
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

  const filteredTODO = todoList.filter((todo) => {
    if (currentFilter === FILTER.ALL) return true;
    if (currentFilter === FILTER.DONE) return todo.status === true;
    if (currentFilter === FILTER.DOING) return todo.status === false;
    return true;
  });

  const displayedTODO = filteredTODO.slice(0, page * itemsPerPage);

  const selectTodo = (id) => {
    // dataRef.current.selectTodo(id);
    console.log(id);
  };

  return (
    <div className={`${contextTheme.theme} Todolist `} ref={scrollRef}>
      <h1>Todos</h1>
      <Todoform ref={dataRef} />
      {data &&
        data.map((todo) => (
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
