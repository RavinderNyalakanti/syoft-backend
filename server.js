const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./config/db'); // Import sequelize
const { syncModels } = require('./models');

dotenv.config();  // Load environment variables from .env file

const app = express();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await syncModels(); // Ensure your models are synchronized here
    console.log(`Server running on port ${PORT}`);
});
