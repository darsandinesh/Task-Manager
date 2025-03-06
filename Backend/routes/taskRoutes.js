import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from '../controller/taskController.js';

const taskRouter = express.Router();

taskRouter.get('/', authMiddleware, getTasks);
taskRouter.get('/:id', authMiddleware, getTaskById);
taskRouter.post('/', authMiddleware, createTask);
taskRouter.put('/:id', authMiddleware, updateTask);
taskRouter.delete('/:id', authMiddleware, deleteTask);

export default taskRouter;