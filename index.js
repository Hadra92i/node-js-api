const express = require('express');
const dotenv = require('dotenv').config();
const goalsRouter = require('./routes/goalRoutes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/api/goals',goalsRouter);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));