import { useContext, useState } from "react";
import { ACTIONS } from "../assets/helperFunctions/ActionsObject";
import { dispatchContext} from "../assets/helperFunctions/DispatchContext";
import "../assets/styles/Task.css";

function Task({ todo }) {
  const [name, setName] = useState(todo.name);
  const [editState, setEditState] = useState(false)
  const { dispatch } = useContext(dispatchContext);

  function handleToggle() {
    dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
  }

  function handleDelete() {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id }})
  }

  function handleEdit() {
    dispatch({ type: ACTIONS.HANDLE_EDIT, payload: { id: todo.id, name: name }})
  }

  function handleEditState() {
    setEditState((prevEditState) => !prevEditState)
  }

  return (
    <li className={ `task task--${ editState ? 'editing' : (todo.completed ? 'completed' : '') }`}>
      <div className="view">
        <div>
          <label>
            <input type="checkbox" onClick={handleToggle}/>
            <span className="task__name">{name}</span>
            <span className="custom-checkbox"></span>
          </label>
        </div>
        <div>
          <span className="task__date"></span>
          <div className="task__actions">
            <button className="button button-edit button--icon" onClick={handleEditState}></button>
            <button className="button button-delete button--icon" onClick= {handleDelete}></button>
          </div>
        </div>
      </div>
      <form onSubmit={(e) => {
        if(editState) {
          e.preventDefault();
          handleEdit();
        }
        setEditState(false);
      }}>
        <input type="text" className="edit" value={name} onChange={(e) => setName(e.target.value)}/>
      </form>
    </li>
  );
}

export default Task;
