const morgan = require('morgan');
const express = require('express'); 
const cors = require('cors'); 
const pool = require('./config/db_pgsql'); 

const productsRoutes = require('./routes/products.routes');

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());
app.use(morgan(':method :url :status :response-time ms - :res[content-length]', {
  stream: {
    write: (msg) => {
      console.log('Morgan dice:', msg.trim());
    }
  }
}));

app.use((req, res, next) => {
  console.log('Petición recibida:', req.method, req.url);
  next();
});

// Rutas adaptadas
const productRoutes = require('./routes/products.routes');
app.use('/api/products', productRoutes);

const providerRoutes = require('./routes/providers.routes');
app.use('/api/providers', providerRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

process.on('uncaughtException', (err) => {
  console.error('Error no detectado:', err);
});

setInterval(() => {}, 1000); 