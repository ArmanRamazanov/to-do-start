import Task from "./Task";
import "../assets/styles/TasksList.css";
function TasksList({ todos, filterState }) {
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

export default TasksList;
