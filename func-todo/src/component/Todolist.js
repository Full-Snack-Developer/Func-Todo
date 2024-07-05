import React, { useState, useContext, useEffect, useRef } from 'react';
import { themeContext } from '../context/themeProvider';
import Todoform from './Todoform';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import Footer from './Footer';
import { useSelector, useDispatch } from 'react-redux';
import { FILTER } from '../reducer/filterReducer';
import { fetchTodoData } from '../action/apiTodoAction';
import { apiType, fetchTodoDataSuccess } from '../action/apiTodoAction';
import { NavLink, Link } from 'react-router-dom';

uuidv4();

function Todolist() {
  const contextTheme = useContext(themeContext);
  const scrollRef = useRef(null);
  const dataRef = useRef(null);
  const todoList = useSelector((state) => state.todoReducer.list);
  const currentFilter = useSelector((state) => state.filterReducer.filter);
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const dispatch = useDispatch();

  //API DATA
  useEffect(() => {
    dispatch(fetchTodoDataSuccess());
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
      scrollElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollElement) {
        scrollElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const filteredTODO = todoList.filter((todo) => {
    switch (currentFilter) {
      case FILTER.ALL:
        return true;
      case FILTER.DONE:
        return todo.status === true;
      case FILTER.DOING:
        return todo.status === false;
      default:
        return true;
    }
  });

  const displayedTODO = filteredTODO.slice(0, page * itemsPerPage);

  const selectTodo = (id) => {
    const selectedTodo = todoList.find((todo) => todo.id === id);
    if (selectedTodo && dataRef.current) {
      dataRef.current.updateValue(selectedTodo.id, selectedTodo.task);
    }
  };

  return (
    <div className={`${contextTheme.theme} Todolist `} ref={scrollRef}>
      <h1>Todos</h1>
      <div className="homepage">
        <Link to={'addpage'} className="homepage-btn">
          Add
        </Link>
        <button className="homepage-btn">Edit</button>
      </div>
      {/* <Todoform ref={dataRef} /> */}
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
