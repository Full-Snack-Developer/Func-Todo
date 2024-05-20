import React from "react";
import { FILTER } from "../reducer/filterReducer";
import { filterTodo } from "../action/filterTodoAction";
import { useDispatch } from "react-redux";

function Footer() {
  const dispatch = useDispatch();

  const filterALLTODO = () => {
    dispatch(filterTodo(FILTER.ALL));
  };

  const filterDoneTODO = () => {
    dispatch(filterTodo(FILTER.DONE));
  };

  const filterDoingTODO = () => {
    dispatch(filterTodo(FILTER.DOING));
  };
  return (
    <div className="Footer">
      <button className="footer-btn" onClick={filterALLTODO}>
        ALL
      </button>
      <button className="footer-btn" onClick={filterDoneTODO}>
        DONE
      </button>
      <button className="footer-btn" onClick={filterDoingTODO}>
        DOING
      </button>
    </div>
  );
}
export default Footer;
