import { useContext } from "react";
import TaskForm from "./TaskForm";
import { TaskContext } from "./TaskProvider";
import Board from "./Board";
const BoardContainer = () => {
  const { showForm } = useContext(TaskContext);
  return (
    <div className="board-container">
      {showForm && (
        <div>
          <TaskForm />
        </div>
      )}
      <Board />
    </div>
  );
};

export default BoardContainer;
