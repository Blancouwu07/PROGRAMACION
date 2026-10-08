const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON en las peticiones
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('API Aventuras San Gil funcionando');
});

// Ruta de información general del proyecto
app.get('/api/info', (req, res) => {
  res.json({
    nombre: 'Aventuras San Gil',
    version: '1.0.0',
    descripcion: 'API para la gestión de deportes extremos y turismo en San Gil'
  });
});

// Ruta para obtener el listado de actividades
app.get('/api/actividades', (req, res) => {
  res.json([
    { id: 1, nombre: 'Canotaje / Rafting', rio: 'Fonce', dificultad: 'Media' },
    { id: 2, nombre: 'Parapente', lugar: 'Chicamocha', dificultad: 'Alta' },
    { id: 3, nombre: 'Torrentismo', lugar: 'Pinos', dificultad: 'Media' }
  ]);
});

// Manejo de rutas no encontradas (404 personalizado)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});