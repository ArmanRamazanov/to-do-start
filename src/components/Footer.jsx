import TasksFilter from "./TasksFilter";
import "../assets/styles/Footer.css";
function Footer(props) {
  return (
    <footer className="footer">
      <span className="todo-count">{props.count} items left</span>
      <TasksFilter />
      <button className="button button-clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
