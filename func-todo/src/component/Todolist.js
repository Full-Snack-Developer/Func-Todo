import React, { useState, useContext, useEffect, useRef } from "react";
import { themeContext } from "../context/themeProvider";
import Todoform from "./Todoform";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../action/addTodoAction";
import { deleteTodo } from "../action/deleteTodoAction";
import { statusTodo } from "../action/statusTodoAction";
import { filterTodo } from "../action/filterTodoAction";
import { FILTER } from "../reducer/filterReducer";
import { paginationTodo } from "../action/paginationTodoAction";

uuidv4();

function Todolist() {
  const contextTheme = useContext(themeContext);
  const scrollRef = useRef(null);
  const dataRef = useRef(null);

  //Redux
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todoReducer.list);
  const todoListFilter = useSelector((state) => state.filterReducer.filter);
  const todoPagination = useSelector(
    (state) => state.paginationReducer.pagination
  );

  const addNewTodo = (task) => {
    const newTODO = {
      id: uuidv4(),
      task: task,
      status: false,
    };
    const actionAddTODO = addTodo(newTODO);
    dispatch(actionAddTODO);
  };

  const deleteNewTodo = (id) => {
    const actionDeleteTODO = deleteTodo(id);
    dispatch(actionDeleteTODO);
  };

  const toggleComplete = (id) => {
    const actionStatusTODO = statusTodo(id);
    dispatch(actionStatusTODO);
  };

  const filterALLTODO = () => {
    dispatch(filterTodo(FILTER.ALL));
  };

  const filterDoneTODO = () => {
    dispatch(filterTodo(FILTER.DONE));
  };

  const filterDoingTODO = () => {
    dispatch(filterTodo(FILTER.DOING));
  };

  const filteredTODO = todoList.filter((todo) => {
    if (todoListFilter === FILTER.ALL) return true;
    if (todoListFilter === FILTER.DONE) return todo.status === true;
    if (todoListFilter === FILTER.DOING) return todo.status === false;
    return true;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollRef.current.scrollHeight - scrollRef.current.scrollTop ===
        scrollRef.current.clientHeight
      ) {
        dispatch(paginationTodo(page + 1, itemsPerPage));
      }
    };

    scrollRef.current.addEventListener("scroll", handleScroll);
    return () => {
      scrollRef.current.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, page, itemsPerPage]);

  return (
    <div className={`${contextTheme.theme} Todolist `} ref={scrollRef}>
      <h1>Todos</h1>
      <Todoform addNewTodo={addNewTodo} ref={dataRef} />
      {filteredTODO.map((todo) => (
        <Todo
          todoList={todoList}
          task={todo}
          key={todo.id}
          deleteNewTodo={deleteNewTodo}
          toggleComplete={toggleComplete}
          selectTodo={() => {}}
        />
      ))}
      <Footer
        filterALLTODO={filterALLTODO}
        filterDoneTODO={filterDoneTODO}
        filterDoingTODO={filterDoingTODO}
      />
    </div>
  );
}
export default Todolist;
