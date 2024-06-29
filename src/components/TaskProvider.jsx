/* eslint-disable no-prototype-builtins */
import { createContext, useMemo, useState } from "react";

export const TaskContext = createContext(null);

// eslint-disable-next-line react/prop-types
const TaskProvider = ({ children }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const TASK_CATEGORIES = useMemo(() => {
    return {
      todo: {
        key: "todo",
        label: "Todo",
      },
      inProgress: {
        key: "in-progress",
        label: "In Progress",
      },
      completed: {
        key: "completed",
        label: "Completed",
      },
    };
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tasksData = useMemo(() => {
    return [
      {
        id: 1,
        category: TASK_CATEGORIES.todo.key,
        title: "Task 1",
        progress: 20,
        description: "hello this is task",
      },
      {
        id: 2,
        category: TASK_CATEGORIES.completed.key,
        title: "Task 2",
        progress: 40,
        description: "hello this is task",
      },
      {
        id: 3,
        category: TASK_CATEGORIES.inProgress.key,
        title: "Task 3",
        progress: 60,
        description: "hello this is task",
      },
      {
        id: 4,
        category: TASK_CATEGORIES.todo.key,
        title: "Task 4",
        progress: 20,
        description: "hello this is task",
      },
      {
        id: 5,
        category: TASK_CATEGORIES.completed.key,
        title: "Task 5",
        progress: 40,
        description: "hello this is task",
      },
      {
        id: 6,
        category: TASK_CATEGORIES.inProgress.key,
        title: "Task 6",
        progress: 80,
        description: "hello this is task",
      },
      {
        id: 7,
        category: TASK_CATEGORIES.todo.key,
        title: "Task 7",
        progress: 20,
        description: "hello this is task",
      },
      {
        id: 8,
        category: TASK_CATEGORIES.completed.key,
        title: "Task 8",
        progress: 40,
        description: "hello this is task",
      },
      {
        id: 9,
        category: TASK_CATEGORIES.inProgress.key,
        title: "Task 9",
        progress: 60,
        description: "hello this is task",
      },
      {
        id: 11,
        category: TASK_CATEGORIES.todo.key,
        title: "Task 11",
        progress: 20,
        description: "hello this is task",
      },
      {
        id: 12,
        category: TASK_CATEGORIES.completed.key,
        title: "Task 12",
        progress: 40,
        description: "hello this is task",
      },
      {
        id: 10,
        category: TASK_CATEGORIES.inProgress.key,
        title: "Task 10",
        progress: 80,
        description: "hello this is task",
      },
    ];
  });
  const [tasks, setTasks] = useState(tasksData);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const handleDelete = (taskId) => {
    setTasks((prev) => {
      return prev.filter((item) => {
        return item.id !== taskId;
      });
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleEdit = (taskId) => {
    setEditingTask(() => {
      return tasks.find((task) => {
        return task.id === taskId;
      });
    });
    setShowForm(() => {
      return true;
    });
  };
  console.log(editingTask, "editing task");
  console.log(tasks, "tasks");
  const categorizedTasks = useMemo(() => {
    const categorizedTasks = {};
    Object.entries(TASK_CATEGORIES).forEach((taskCategory) => {
      const isCategoryAlreadyPresent = categorizedTasks?.hasOwnProperty(
        taskCategory[1].key
      );
      if (!isCategoryAlreadyPresent) {
        categorizedTasks[taskCategory[1].key] = [];
      }
      categorizedTasks[taskCategory[1].key] = tasks.filter((task) => {
        return task.category === taskCategory[1].key;
      });
    });
    return categorizedTasks;
  }, [TASK_CATEGORIES, tasks]);
  const memoizedValue = useMemo(() => {
    return {
      tasks,
      setTasks,
      categorizedTasks,
      TASK_CATEGORIES,
      handleDelete,
      handleEdit,
      showForm,
      setShowForm,
      editingTask,
      setEditingTask,
    };
  }, [
    tasks,
    categorizedTasks,
    TASK_CATEGORIES,
    handleEdit,
    showForm,
    editingTask,
  ]);
  return (
    <TaskContext.Provider value={memoizedValue}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
