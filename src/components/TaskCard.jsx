import { useContext } from "react";
import { TaskContext } from "./TaskProvider";
import Progress from "./Progress";
import { LuFileEdit } from "react-icons/lu";
import { FaRegTrashAlt } from "react-icons/fa";

/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {
  const { TASK_CATEGORIES, handleDelete, handleEdit, editingTask } =
    useContext(TaskContext);
  console.log(editingTask, "editing");
  return (
    <div className="task-card">
      <div className="task-card-header">
        <h5 className="task-card-title">{task.title}</h5>
        <div className="task-actions">
          <button
            disabled={editingTask && true}
            onClick={() => {
              handleEdit(task.id);
            }}
            className="btn edit disable">
            <LuFileEdit />
          </button>
          <button
            disabled={task.id === editingTask?.id}
            onClick={() => {
              handleDelete(task.id);
            }}
            className="btn delete">
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
      <Progress value={task.progress}>{TASK_CATEGORIES["todo"].label}</Progress>
      <div className="task-card-body">
        <p className="task-card-description">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
