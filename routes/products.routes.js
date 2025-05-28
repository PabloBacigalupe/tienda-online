const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products.controller');

// Rutas
router.get('/', productsController.getAllProducts);
router.get('/:company', productsController.getCompany);
router.post('/', productsController.insertProduct);
router.put('/', productsController.updateProduct);
router.delete('/:id_product', productsController.deleteProduct);

module.exports = router;