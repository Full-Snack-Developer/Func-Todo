import React from 'react';
import Todoform from '../component/Todoform';
import { Link, NavLink } from 'react-router-dom';
import '../css/backBtn.css';

const AddPage = () => {
  return (
    <div className="Todolist">
      <h1>Add Todo Page</h1>
      <Todoform />
      <Link to={'/'} className="back-btn">
        Back
      </Link>
    </div>
  );
};

export default AddPage;
