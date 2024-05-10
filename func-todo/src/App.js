import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { useState } from "react";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import Todolist from "./component/Todolist";

import { useContext } from "react";
import { themeContext } from "./context/themeProvider";
function App() {
  const contextTheme = useContext(themeContext);
  // console.log(contextTheme);
  return (
    <div className="App">
      <Todolist />
      <button onClick={contextTheme.toggleTheme}>
        <FontAwesomeIcon icon={faToggleOff} />
      </button>
    </div>
  );
}

export default App;
