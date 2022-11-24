import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';
import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },

    filename(req, file, callback) {
      callback(null, `${Date.now()} - ${file.originalname}`);
    },
  }),
});

// list categoriers
router.get('/categories', listCategories);

// create categoriy
router.post('/categories', createCategory);

// list products
router.get('/products', listProducts);

// create product
router.post('/products', upload.single('image'), createProduct);

// get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok!');
});

// list orders
router.get('/orders', (req, res) => {
  res.send('ok!');
});

// create order
router.post('/orders', (req, res) => {
  res.send('ok!');
});

// change order status
router.patch('/orders/:orderID', (req, res) => {
  res.send('ok!');
});

// delete/cancel order
router.delete('/orders/:orderID', (req, res) => {
  res.send('ok!');
});
