import "./App.css";
import TaskProvider from "./components/TaskProvider";
import BoardContainer from "./components/BoardContainer";
export default function App() {
  return (
    <TaskProvider>
      <div className="page">
        <h3 className="project-title">Project 1</h3>
        <BoardContainer />
      </div>
    </TaskProvider>
  );
}
