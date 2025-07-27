import { useState, useRef, useEffect } from "react";
import "../assets/styles/TasksFilter.css";
import PropTypes from "prop-types";

function TasksFilter({ setFilter }) {
  const [activeButton, setActiveButton] = useState("all");

  function handleFilter(type) {
    switch (type) {
      case "filter-completed":
        setFilter("filter-completed");
        break;
      case "filter-all":
        setFilter("filter-all");
        break;
      case "filter-active":
        setFilter("filter-active");
        break;
      default:
        setFilter("filter-all");
    }
  }

  function handleActiveButton(button) {
    setActiveButton(button);
  }

  return (
    <ul className="tasks-filter">
      <li
        className={`tasks-filter__item ${activeButton === "all" ? "selected" : ""}`}
      >
        <button
          onClick={() => {
            handleFilter("filter-all");
            handleActiveButton("all");
          }}
        >
          All
        </button>
      </li>
      <li
        className={`tasks-filter__item ${activeButton === "active" ? "selected" : ""}`}
      >
        <button
          onClick={() => {
            handleFilter("filter-active");
            handleActiveButton("active");
          }}
        >
          Active
        </button>
      </li>
      <li
        className={`tasks-filter__item ${activeButton === "completed" ? "selected" : ""}`}
      >
        <button
          onClick={() => {
            handleFilter("filter-completed");
            handleActiveButton("completed");
          }}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default TasksFilter;
