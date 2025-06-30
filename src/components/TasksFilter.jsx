import "../assets/styles/TasksFilter.css";

function TasksFilter() {
  return (
    <ul className="tasks-filter">
      <li className="tasks-filter__item selected">
        <button>All</button>
      </li>
      <li className="tasks-filter__item">
        <button>Active</button>
      </li>
      <li className="tasks-filter__item">
        <button>Completed</button>
      </li>
    </ul>
  );
}

export default TasksFilter;
