function validateTask(req, res, next) {
    const { name, completed } = req.body;

    if (name !== undefined && typeof name !== 'string') {
        return res.status(400).json({ error: 'Task name should be a string.' });
    }

    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed field should be a boolean.' });
    }

    next();
}

module.exports = validateTask;
