import { useContext, useState } from "react";
import { TaskContext } from "./TaskProvider";

const TaskForm = () => {
  const {
    setShowForm,
    editingTask,
    setEditingTask,
    TASK_CATEGORIES,
    setTasks,
  } = useContext(TaskContext);
  const initialValues = {
    id: editingTask?.id || Math.floor(Math.random() * 100000),
    category: editingTask?.category || "",
    title: editingTask?.title || "",
    description: editingTask?.description || "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const handleSubmit = () => {
    if (editingTask) {
      setTasks((prev) => {
        return prev.map((task) => {
          if (task.id === editingTask.id) {
            return { ...task, ...formValues };
          }
          return task;
        });
      });
    } else {
      setTasks((prev) => {
        return [...prev, { ...formValues }];
      });
    }

    setShowForm(false);
    setEditingTask(null);
  };

  const handleChange = (e) => {
    setFormValues((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
        }}>
        <div className="task-form-item">
          <label className="task-label" htmlFor="title">
            Title
          </label>
          <input
            className="task-input"
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            required
            minLength={3}
            maxLength={100}
          />
        </div>
        <div className="task-form-item">
          <label className="task-label" htmlFor="category">
            Category
          </label>
          <select
            className="task-select"
            value={formValues.category}
            onChange={handleChange}
            name="category"
            required>
            {Object.entries(TASK_CATEGORIES).map((category) => {
              return (
                <option
                  key={category[1].key}
                  value={category[1].key}
                  selected={category[1].key === formValues.category}
                  id={category[1].key}>
                  {category[1].label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="task-form-item">
        <label className="task-label" htmlFor="description">
          Description
        </label>
        <textarea
          name="description"
          className="task-textarea"
          rows={3}
          value={formValues.description}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="task-submit-btn">
        Save
      </button>
    </form>
  );
};

export default TaskForm;
