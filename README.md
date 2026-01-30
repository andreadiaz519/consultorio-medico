Consultorio Médico – API REST
Descripción del proyecto

Este proyecto consiste en el desarrollo de una API REST para la gestión de pacientes de un consultorio médico.
La API fue construida utilizando Node.js y Express, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre los pacientes.

El proyecto está enfocado principalmente en el backend, y todas las funcionalidades fueron probadas con Postman.
Adicionalmente, se incluye un frontend básico servido de forma estática para comprobar la conexión con la API.

*Tecnologías utilizadas

-Node.js
-Express.js
-JavaScript
-Postman (para pruebas de la API)
-HTML (frontend básico)

Para ejecutar el proyecto, es necesario instalar primero las dependencias utilizando el comando npm install y luego iniciar el servidor con npm run dev. El servidor se ejecuta en el puerto 3000 y puede ser accedido desde el computador o desde herramientas de prueba como Postman a través de la dirección http://localhost:3000
El frontend básico puede visualizarse accediendo directamente a esta misma URL desde el computador.

La API cuenta con endpoints para la gestión de pacientes. Se tiene un endpoint POST /patients para crear un nuevo paciente enviando los datos en formato JSON, un endpoint GET /patients para listar todos los pacientes registrados, un endpoint PUT /patients/:id para actualizar la información de un paciente existente y un endpoint DELETE /patients/:id para eliminar un paciente por su identificador. Todos los endpoints retornan respuestas en formato JSON y utilizan códigos de estado HTTP adecuados como 200, 201, 400 y 404 según el resultado.

Todas las funcionalidades de la API fueron probadas utilizando Postman, verificando el correcto funcionamiento de cada operación del CRUD, la correcta recepción y validación de datos, el manejo de errores y la estabilidad del servidor. La aplicación implementa un middleware de manejo de errores que permite responder de forma clara ante situaciones como datos incompletos, no encontrados o errores internos del servidor, devolviendo mensajes comprensibles para quien mire el proyecto.