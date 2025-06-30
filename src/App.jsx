import TasksList from "./components/TasksList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";
import Task from "./components/Task";
import "./App.css";

function App() {
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
          <TasksList />
        </main>
        <Footer count={1} />
      </div>
    </>
  );
}

export default App;
