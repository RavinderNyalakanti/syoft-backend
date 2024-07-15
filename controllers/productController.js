const Product = require('../models/Product');

// Create a new product
const createProduct = async (req, res) => {
    const { title, description, inventoryCount } = req.body;
    
    try {
        // Validate that inventoryCount is not null
        if (inventoryCount === null || inventoryCount === undefined) {
            return res.status(400).json({ message: 'Inventory count cannot be null' });
        }

        const newProduct = await Product.create({ title, description, inventoryCount });
        res.status(201).json({ message: 'Product created successfully', product: newProduct });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Server error creating product', error: error.message });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Server error fetching products' });
    }
};

// Update a product
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { title, description, inventoryCount } = req.body;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.title = title;
        product.description = description;
        product.inventoryCount = inventoryCount;

        await product.save();
        res.json({ message: 'Product updated successfully', product });
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Server error updating product' });
    }
};

// Delete a product
const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        await product.destroy();
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Server error deleting product' });
    }
};

module.exports = { createProduct, getProducts, updateProduct, deleteProduct };
