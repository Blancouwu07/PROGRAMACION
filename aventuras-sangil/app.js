const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender JSON en las peticiones
app.use(express.json());

// Arreglo de actividades global
const actividades = [
  { id: 1, nombre: 'Rafting en el río Fonce', tipo: 'agua', precio: 60000 },
  { id: 2, nombre: 'Parapente en el cañón', tipo: 'aire', precio: 180000 },
  { id: 3, nombre: 'Caminata Camino Real a Barichara', tipo: 'tierra', precio: 0 },
  { id: 4, nombre: 'Torrentismo en cascada', tipo: 'agua', precio: 70000 }
];

// Ruta principal
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

// Ruta de información general del proyecto
app.get('/api/info', (req, res) => {
  res.json({
    nombre: 'Aventuras San Gil',
    version: '1.0.0',
    descripcion: 'API para la gestión de deportes extremos y turismo en San Gil'
  });
});

// Ruta para obtener actividades (con soporte para filtrar con ?tipo=)
app.get('/api/actividades', (req, res) => {
  const { tipo } = req.query;

  if (tipo) {
    const filtradas = actividades.filter(a => a.tipo.toLowerCase() === tipo.toLowerCase());
    return res.json(filtradas);
  }

  res.json(actividades);
});

// Ruta para buscar una actividad por ID (req.params)
app.get('/api/actividades/:id', (req, res) => {
  console.log('params:', req.params);
  
  const actividad = actividades.find((a) => a.id === parseInt(req.params.id));

  if (!actividad) {
    return res.status(404).json({ error: 'Actividad no encontrada' });
  }

  res.json(actividad);
});

// Manejo de rutas no encontradas (404 personalizado)
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});