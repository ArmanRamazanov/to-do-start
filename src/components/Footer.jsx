import { dispatchContext } from "../assets/helperFunctions/DispatchContext";
import { useContext } from "react";
import { ACTIONS } from "../assets/helperFunctions/ActionsObject";
import TasksFilter from "./TasksFilter";
import PropTypes from "prop-types";
import "../assets/styles/Footer.css";

function Footer({ count = 0, setFilter }) {
  const { dispatch } = useContext(dispatchContext);
  function handleClearCompleted() {
    dispatch({ type: ACTIONS.CLEAR_COMPLETED });
  }

  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter setFilter={setFilter} />
      <button
        onClick={handleClearCompleted}
        className="button button-clear-completed"
      >
        Clear completed
      </button>
    </footer>
  );
}

Footer.propTypes = {
  setFilter: PropTypes.func.isRequired,
};

export default Footer;
