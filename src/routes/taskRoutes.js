const express = require('express');
const router = express.Router();
const validateTask = require('../middleware/validateTask');

const tasks = [];

router.get('/', (req, res) => {
    res.status(200).json(tasks);
});

router.post('/', validateTask, (req, res) => {
    const task = { id: tasks.length + 1, ...req.body };
    tasks.push(task);
    res.status(201).json(task);
});

router.get('/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.status(200).json(task);
});

router.patch('/:id', validateTask, (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    Object.assign(task, req.body);
    res.status(200).json(task);
});


router.delete('/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    tasks.splice(index, 1);
    res.status(204).send(); 
});


module.exports = router;
