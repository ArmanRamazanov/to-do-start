import { useState, useContext } from "react";
import { ACTIONS } from "../assets/helperFunctions/ActionsObject"; 
import { dispatchContext } from "../assets/helperFunctions/DispatchContext";
import "../assets/styles/NewTaskForm.css";

function NewTaskForm() {
  const [name, setName] = useState('');
  const {dispatch} = useContext(dispatchContext);

  function handleTaskForm() {
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
    setName('');
  }

  return (
    <form onSubmit={(e) =>{
      e.preventDefault();
      handleTaskForm(name)
    }}>
      <input onChange={(e) => setName(e.target.value)}
        value={name}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </form>
  );
}

export default NewTaskForm;
