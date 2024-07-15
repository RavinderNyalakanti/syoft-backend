const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const { syncModels } = require('./models');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await syncModels();
    console.log(`Server running on port ${PORT}`);
});
