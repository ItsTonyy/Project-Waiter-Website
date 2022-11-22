import { Router } from 'express';
import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';


export const router = Router();

// list categoriers
router.get('/categories', listCategories);

// create categoriy
router.post('/categories', createCategory);

// list products
router.get('/products', (req, res) => {
  res.send('ok!');
});

// create product
router.post('/products', (req, res) => {
  res.send('ok!');
});

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
