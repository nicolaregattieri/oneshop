import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

// @desc Fetch all products
//@rout GET /api/products
//@access Public

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc Fetch single product
//@rout GET /api/products/:id
//@access Public

const getProductById = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

export { getProductById, getProducts };
