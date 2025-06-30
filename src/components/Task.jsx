import "../assets/styles/Task.css";

function Task(props) {
  return (
    <li className={`task task--${props.state}`}>
      <div className="view">
        <div>
          <label>
            <input type="checkbox" />
            <span className="task__name">{props.name}</span>
            <span className="custom-checkbox"></span>
          </label>
        </div>
        <div>
          <span className="task__date">{props.date}</span>
          <div className="task__actions">
            <button className="button button-edit button--icon"></button>
            <button className="button button-delete button--icon"></button>
          </div>
        </div>
      </div>
      <input type="text" className="edit" value={props.name} />
    </li>
  );
}

export default Task;
