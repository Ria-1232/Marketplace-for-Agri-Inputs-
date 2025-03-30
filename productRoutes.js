const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
