// routes/productRoutes.js
import express from 'express';
import * as productController from '../controllers/productController.js';

const router = express.Router();

router.post('/create', productController.createProduct);
router.get('/', productController.listProducts);
router.delete('/:id', productController.deleteProduct);
router.post('/:id/update_quantity', productController.updateProductQuantity);

export default router;
