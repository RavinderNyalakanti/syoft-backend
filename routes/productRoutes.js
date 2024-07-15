const express = require('express');
const { createProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect, admin, manager } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(protect, admin, createProduct)
    .get(protect, manager, getProducts);

router.route('/:id')
    .put(protect, manager, updateProduct)
    .delete(protect, admin, deleteProduct);

module.exports = router;
