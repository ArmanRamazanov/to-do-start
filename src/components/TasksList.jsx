import Task from "./Task";
import "../assets/styles/TasksList.css";
function TasksList( {todos} ) {
  return (
    <ul>
      {todos.map(todo => <Task key={todo.id} todo={todo}></Task>)}
    </ul>
  );
}

export default TasksList;
