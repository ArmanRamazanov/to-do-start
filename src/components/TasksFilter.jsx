import "../assets/styles/TasksFilter.css";

function TasksFilter({ setFilter }) {
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

  return (
    <ul className="tasks-filter">
      <li className="tasks-filter__item selected">
        <button onClick={() => handleFilter("filter-all")}>All</button>
      </li>
      <li className="tasks-filter__item">
        <button onClick={() => handleFilter("filter-active")}>Active</button>
      </li>
      <li className="tasks-filter__item">
        <button onClick={() => handleFilter("filter-completed")}>
          Completed
        </button>
      </li>
    </ul>
  );
}

export default TasksFilter;
