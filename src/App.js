import React from "react";
import "./styles.css";

const App = () => {
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input type="text" placeholder="add items" />
          <button> ADD </button>
          <br />
          <ol>
            <li> buy apple</li>
          </ol>
        </div>
      </div>
    </>
  );
};
