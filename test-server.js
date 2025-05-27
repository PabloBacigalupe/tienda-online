const express = require('express');
const morgan = require('morgan');

const entriesRoutes = require('./routes/entries.routes'); 
const authorsRoutes = require('./routes/authors.routes');

const app = express();
const PORT = 3000;

app.use(express.json()); // para leer req.body
app.use(morgan('dev')); 

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

// Rutas principales
app.use('/api/entries', entriesRoutes); 

app.use('/api/authors', authorsRoutes);

// Arrancar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});