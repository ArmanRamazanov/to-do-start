import { useReducer } from "react";
import { reduce } from "./reduce";
import { dispatchContext } from "./DispatchContext";
import PropTypes from "prop-types";

function init() {
  const saved = JSON.parse(localStorage.getItem("tasks"));

  if (saved) return saved;
  return [];
}

export function DispatchContextProvider({ children }) {
  const [todos, dispatch] = useReducer(reduce, [], init);

  return (
    <dispatchContext.Provider value={{ dispatch, todos }}>
      {children}
    </dispatchContext.Provider>
  );
}

DispatchContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
