import { useEffect } from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import "../assets/styles/TasksList.css";

function TasksList({ todos, filterState = "filter-active" }) {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  return (
    <ul>
      {todos
        .filter((todo) => {
          if (filterState === "filter-active") {
            return todo.completed === false;
          } else if (filterState === "filter-completed") {
            return todo.completed === true;
          } else {
            return todo;
          }
        })
        .map((todo) => (
          <Task key={todo.id} todo={todo}></Task>
        ))}
    </ul>
  );
}

TasksList.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default TasksList;
