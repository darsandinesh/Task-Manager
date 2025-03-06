import React, { useState, useEffect } from 'react';
import './TaskList.css';
import { createTask, deleteTask, getTasks, updateTask } from '../services/taskService';
import { toast } from 'react-toastify';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchTasks = async () => {
      try {
        const response = await getTasks();

        setTasks(response.data.tasks)
        setTimeout(() => {
          setLoading(false);
        }, 2000)
      } catch (error) {
        toast.error('Internal server error');
      }
    }
    fetchTasks();
  }, []);

  // Handle add task
  const handleAddTask = async () => {
    if (newTask.title.trim() && newTask.description.trim()) {
      const newTaskItem = { id: tasks.length + 1, ...newTask };
      try {
        const response = await createTask(newTask);
        if (response.data.success) {
          setTasks([...tasks, newTaskItem]);
          setNewTask({ title: '', description: '' });
          toast.success(response.data.message)
        }
      } catch (error) {
        toast.error('Internal Server error')
      }

    }
  };

  // Handle task input change
  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  // Handle edit/update task
  const handleUpdateTask = (task) => {
    setEditingTask(task);
    setNewTask(task);
  };

  // Handle save after updating task
  const handleSaveTask = async () => {
    try {
      const response = await updateTask(newTask);
      if (response.data.success) {
        toast.success('Task Updated Successfull')
      }
    } catch (error) {
      toast.error('Internal server error');
    }
    setTasks(
      tasks.map((task) =>
        task._id === editingTask._id ? { ...task, ...newTask } : task
      )
    );
    setEditingTask(null);
    setNewTask({ title: '', description: '' });
  };

  const handelDelete = async (task) => {
    try {
      const response = await deleteTask(task._id);
      if (response.data.success) {
        const newTasks = tasks.filter((t) => t._id != task._id);
        toast.success('Task Deleted successfull');
        setTasks(newTasks);
      }
    } catch (error) {

    }
  }

  if (loading) {
    return <p className="tasklist-loading">Loading tasks...</p>;
  }

  return (
    <div className="tasklist-container">
      <h2>Task List</h2>

      {/* Add Task Form */}
      <div className="add-task-form">
        <input
          type="text"
          placeholder="Task Title"
          name="title"
          value={newTask.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Task Description"
          name="description"
          value={newTask.description}
          onChange={handleChange}
        />
        {editingTask ? (
          <button onClick={handleSaveTask} className="update-button">
            Save Task
          </button>
        ) : (
          <button onClick={handleAddTask} className="add-button">
            Add Task
          </button>
        )}
      </div>

      {/* Task List */}
      <ul className="tasklist">
        {tasks.map((task) => (
          <li key={task._id} className="task-item">
            <div className="task-content">
              <h3>{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button
              className="update-button"
              onClick={() => handleUpdateTask(task)}
            >
              Update
            </button>
            <button className="delete-button" onClick={() => handelDelete(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
