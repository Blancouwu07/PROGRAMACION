P0: ¿Quién es el cliente, el servidor, y qué viaja en entrada y salida? El cliente es el navegador, el servidor es Node.js, en la entrada viajan el método, URL, headers y body, y en la salida el código de estado, headers y body.

P1: ¿Qué responde el servidor si pides /, /hola y /lo-que-sea? En todas responde "Hola desde el servidor" porque el código no revisa la URL y siempre ejecuta res.end().

P2: ¿Cuántas peticiones aparecen al abrir una página? Aparecen 2, la de la ruta pedida y la de /favicon.ico que envía el navegador por defecto.

P3: ¿Qué responde con /actividades/ o /ACTIVIDADES? Responde 404 "Ruta no encontrada" porque la condición exige la coincidencia exacta /actividades en minúsculas y sin slash.

Reflexión M1: ¿Qué fue tedioso? Comparar rutas con if/else, formatear JSON a mano y programar los 404 manualmente.

P4: ¿Qué responde Express para /no-existe? Un 404 Not Found en HTML que dice Cannot GET /no-existe.

Reflexión M2: ¿Qué resolvió Express? Simplificó las rutas con app.get, automatizó el JSON con res.json() y maneja el 404 por defecto.

P5: ¿Qué pasa si comentas next()? El navegador se queda cargando sin responder y en la terminal solo se imprime el log.


