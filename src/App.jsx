import { useContext } from 'react';
import TasksList from "./components/TasksList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import { dispatchContext }  from "./assets/helperFunctions/DispatchContext";
import "./App.css";

function App() {
  const { todos } = useContext(dispatchContext);

  return (
      <>
        <header className="header">
          <h1>todos</h1>
        </header>
        <div className="card">
          <header className="card__header">
            <NewTaskForm/>
          </header>
          <main className="card__main">
            <TasksList todos={todos}/> 
          </main>
          <Footer count={1} />
        </div>
      </>
  );
}

export default App;
