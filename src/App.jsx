import { useContext, useState } from "react";
import TasksList from "./components/TasksList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import { dispatchContext } from "./assets/helperFunctions/DispatchContext";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("");
  const { todos } = useContext(dispatchContext);
  const remainingTodos = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <header className="header">
        <h1>todos</h1>
      </header>
      <div className="card">
        <header className="card__header">
          <NewTaskForm />
        </header>
        <main className="card__main">
          <TasksList filterState={filter} todos={todos} />
        </main>
        <Footer setFilter={setFilter} count={remainingTodos} />
      </div>
    </>
  );
}

export default App;
