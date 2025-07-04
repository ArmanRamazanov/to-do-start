import { useReducer } from "react";
import { ACTIONS } from "./ActionsObject";
import { dispatchContext } from "./DispatchContext";

function addTodo(name) {
  return ({ id: Date.now(), name:name, completed:false })
}

function reduce(todos, action) {
  switch(action.type) {
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    case ACTIONS.ADD_TODO: 
      return [...todos, addTodo(action.payload.name)]
    case ACTIONS.DELETE_TODO: 
      return todos.filter(todo => todo.id !== action.payload.id)   
    case ACTIONS.HANDLE_EDIT:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          todo.name = action.payload.name
        }
        return todo;
      })
  }
}

export function DispatchContextProvider({ children }) {
    const [todos, dispatch] = useReducer(reduce, []);
    return (
        <dispatchContext.Provider value={{dispatch, todos}}>
            {children}
        </dispatchContext.Provider>
    )

}