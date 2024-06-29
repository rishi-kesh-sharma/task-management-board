/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TaskContext } from "./TaskProvider";
import TaskCard from "./TaskCard";

const BoardColumn = ({ tasks, id }) => {
  const { TASK_CATEGORIES } = useContext(TaskContext);

  return (
    <div className="board-column">
      <div className="board-column-header">
        <h5 className="board-column-header-title">
          {TASK_CATEGORIES[id].label}
        </h5>
      </div>
      <div className="board-column-body">
        {tasks?.map((task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};

export default BoardColumn;
