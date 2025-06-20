const express = require('express');
const morgan = require('morgan');

const providersRoutes = require('./routes/providers.routes'); 
const productsRoutes = require('./routes/products.routes');

const app = express();
const PORT = 3000;

app.use(express.json()); // para leer req.body
app.use(morgan('dev')); 

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Rutas principales
app.use('/api/providers', providersRoutes); 
app.use('/api/products', productsRoutes);

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});