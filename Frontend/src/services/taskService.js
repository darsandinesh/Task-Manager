import api from './api';
import API_ENDPOINTS from './endpoints';

// Fetch all tasks
export const getTasks = () => api.get(API_ENDPOINTS.TASKS);

// Create a new task
export const createTask = (taskData) => api.post(API_ENDPOINTS.CREATE_TASK, taskData);

// update a task 
export const updateTask = (taskData) => api.put(`${API_ENDPOINTS.UPDATE_TASK}/${taskData._id}`, taskData);

// Delete a task
export const deleteTask = (taskId) => api.delete(`${API_ENDPOINTS.DELETE_TASK}/${taskId}`);
