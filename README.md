Consultorio Médico – API REST

Este proyecto consiste en el desarrollo de una API REST para la gestión de pacientes de un consultorio médico. La API fue construida utilizando Node.js y Express, permitiendo realizar operaciones CRUD (crear, consultar, actualizar y eliminar) sobre los pacientes.

El proyecto está enfocado principalmente en el backend y todas sus funcionalidades fueron probadas utilizando Postman. Adicionalmente, se incluye un frontend básico servido de forma estática desde Express para comprobar la correcta comunicación entre el frontend y la API.

Tecnologías utilizadas: Node.js, Express.js, JavaScript, Postman para pruebas de la API y HTML para el frontend básico.

Para ejecutar el proyecto en entorno local, se deben instalar primero las dependencias ejecutando el comando npm install desde la raíz del proyecto. Una vez finalizada la instalación, el servidor se inicia con el comando npm run dev. El servidor se ejecuta en el puerto 3000 y puede ser accedido desde el navegador o desde herramientas como Postman a través de la dirección http://localhost:3000. El frontend básico puede visualizarse desde esta misma URL.

La API cuenta con endpoints para la gestión de pacientes: POST /patients para crear un paciente, GET /patients para listar los pacientes registrados, PUT /patients/:id para actualizar un paciente existente y DELETE /patients/:id para eliminar un paciente por su identificador. Todos los endpoints retornan respuestas en formato JSON y utilizan códigos de estado HTTP adecuados como 200, 201, 400 y 404.

La documentación y pruebas de la API fueron realizadas utilizando Postman. La colección de la API puede ser consultada desde la documentación oficial de Postman en: https://documenter.getpostman.com/
.

Todas las funcionalidades fueron validadas, incluyendo el manejo de errores mediante un middleware que permite responder de forma clara ante datos incompletos, recursos no encontrados o errores internos del servidor.