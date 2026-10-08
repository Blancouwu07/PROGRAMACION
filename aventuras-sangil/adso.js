// servidor-nativo.js
const http = require('http');

const servidor = http.createServer((req, res) => {
console.log('Llegó una petición:', req.method, req.url);
if (req.method === 'GET' && req.url === '/') {
res.end('Hola desde el servidor');
} else if (req.method === 'GET' && req.url === '/actividades') {
// Para mandar JSON hay que decirlo en un header y convertir a texto a mano
res.setHeader('Content-Type', 'application/json');
res.end(JSON.stringify([{ id: 1, nombre: 'Rafting' }]));
} else {
res.statusCode = 404;
res.end('Ruta no encontrada');
}
});

servidor.listen(3000, () => {
console.log('Escuchando en http://localhost:3000');
});