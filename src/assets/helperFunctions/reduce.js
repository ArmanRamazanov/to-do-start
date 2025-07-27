import { ACTIONS } from "./ActionsObject";

function addTodo(name) {
  return {
    id: Date.now(),
    name: name,
    completed: false,
    createdAt: new Date(),
  };
}

export function reduce(todos, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case ACTIONS.ADD_TODO:
      return [...todos, addTodo(action.payload.name)];
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case ACTIONS.HANDLE_EDIT:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.name = action.payload.name;
        }
        return todo;
      });
    case ACTIONS.CLEAR_COMPLETED:
      return todos.filter((todo) => !todo.completed);
  }
}
