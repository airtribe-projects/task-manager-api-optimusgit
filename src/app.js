const express = require('express');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');


const app = express();

app.use(express.json());

app.use('/tasks', taskRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Task Manager API is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
