import { useContext } from "react";
import { TaskContext } from "./TaskProvider";
import BoardColumn from "./BoardColumn";
const Board = () => {
  const { categorizedTasks, TASK_CATEGORIES, setShowForm } =
    useContext(TaskContext);

  const handleAdd = () => {
    setShowForm(true);
  };
  return (
    <div className="board">
      {Object.keys(TASK_CATEGORIES).map((taskCategoryKey) => {
        // console.log(taskCategoryKey);
        return (
          <BoardColumn
            key={taskCategoryKey}
            id={taskCategoryKey}
            tasks={categorizedTasks[TASK_CATEGORIES[taskCategoryKey].key]}
          />
        );
      })}
      <button className="btn task-add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Board;
