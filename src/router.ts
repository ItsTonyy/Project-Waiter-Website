import { Router } from 'express';

export const router = Router();


// list categoriers
router.get('/categories', (req, res) => {
  res.send('ok!');
}) ;


// create categoriy
router.post('/categories', (req, res) => {
  res.send('ok!');
}) ;

// list products
router.get('/products', (req, res) => {
  res.send('ok!');
}) ;

// create product
router.post('/products', (req, res) => {
  res.send('ok!');
}) ;

// get product by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('ok!');
}) ;

// list orders
router.get('/orders', (req, res) => {
  res.send('ok!');
}) ;


// create order
router.post('/orders', (req, res) => {
  res.send('ok!');
}) ;

// change order status
router.patch('/orders/:orderID', (req, res) => {
  res.send('ok!');
}) ;

// delete/cancel order
router.delete('/orders/:orderID', (req, res) => {
  res.send('ok!');
}) ;
