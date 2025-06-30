import Task from "./Task";
import "../assets/styles/TasksList.css";
function TasksList() {
  return (
    <ul>
      <Task name="Completed task" state="completed" date="5 minutes ago" />
      <Task name="Editing" state="editing" />
      <Task name="Active task" state="" date="17 seconds ago" />
    </ul>
  );
}

export default TasksList;
