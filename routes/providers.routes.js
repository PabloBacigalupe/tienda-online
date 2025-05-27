const express = require('express');
const router = express.Router();

const providersController = require('../controllers/providers.controller');

// GET: obtener todos los providers
router.get('/', providersController.getAllEntries);

// POST: insertar un nuevo provider
router.post('/', providersController.insertEntry);

// PUT: modificar un provider por su company
router.put('/', providersController.updateEntry);

// DELETE: borrar un provider por su company
router.delete('/', providersController.deleteEntry);

module.exports = router;