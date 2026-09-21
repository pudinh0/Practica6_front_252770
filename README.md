1. **¿Por qué la interfaz `HorarioRepository` no menciona Express, NestJS ni memoria?**

Define solo el contrato, no necesita saber de infraestructura, frameworks o bases de datos


2. **¿Qué palabra de la clase `HorarioMemoriaRepository` es la que promete cumplir la interfaz del paso anterior?**
implments, asegura de implmentar la interfaz


3. **¿Por qué el servicio `HorariosService` no sabe qué es una petición HTTP?**
es la logica de negocio, no necesita saber mas aparte de eso.

4. **Si mandas un `claseId` con un tipo de dato incorrecto, ¿qué código de estado esperarías y por qué este Controller no lo detecta?**
un 400, el controller no lo detecta por que nose activaron validaciones, ni decoradores correspondiente en el dto para verificar los datos de entrada