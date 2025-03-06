import taskModel from "../models/taskModel.js";
import { validateTask, validteUpdateTask } from "../validations/taskValidation.js";

// Get all tasks for logged-in user
export const getTasks = async (req, res) => {
    try {
        console.log(req.userId);
        const tasks = await taskModel.find({ user: req.userId });
        if (!tasks) {
            res.status(400).json({ message: 'There is no task to show' });
            return;
        }
        res.status(200).json({ success: true, message: 'Task fetched successfull', tasks });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Get a single task by ID
export const getTaskById = async (req, res) => {
    try {
        const task = await taskModel.findById(req.params.id);
        if (!task || task.user.toString() !== req.userId) {
            return res.status(404).json({ message: 'Task not found' });
        }
        res.status(200).json({ success: true, message: 'Task Fetched successsfull', task });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// Create a new task
export const createTask = async (req, res) => {

    const { title, description } = req.body;
    console.log(req.body);
    const errors = validateTask(req.body);
    if (errors) {
        return res.status(400).json({ errors });
    }

    try {
        const task = new taskModel({ title, description, user: req.userId });
        await task.save();
        res.status(201).json({ success: true, message: 'Task created Successful', task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Update a task
export const updateTask = async (req, res) => {

    const errors = validteUpdateTask(req.body);
    if (errors) {
        return res.status(400).json({ errors });
    }

    try {
        const task = await taskModel.findById(req.params.id);
        if (!task || task.user.toString() !== req.userId) {
            return res.status(404).json({ message: 'Task not found' });
        }

        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        await task.save();

        res.status(200).json({ success: true, message: 'Task updated successfull', task });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a task
export const deleteTask = async (req, res) => {
    try {
        const task = await taskModel.findById(req.params.id);
        if (!task || task.user.toString() !== req.userId) {
            return res.status(404).json({ message: 'Task not found' });
        }

        await task.deleteOne({ _id: req.params.id });

        res.status(200).json({ success: true, message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};