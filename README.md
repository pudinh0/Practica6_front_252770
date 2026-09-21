Aquí tienes las preguntas con sus respuestas redactadas con el nivel técnico adecuado para que las copies y pegues directamente en el archivo `README.md` de tu repositorio:

**1. ¿Por qué esta interfaz (`MiembroRepository`) no menciona Express, NestJS ni memoria?**

Porque es solamente un contrato, no se fija en la infraestrucutra, como se guarda o que frameworks utiliza, es una abstraccion

**2. ¿Qué palabra de esa clase es la que promete cumplir la interfaz del paso anterior?**


implements, es la palabra reservada para implementar o llevar acabo u ncontrato

**3. ¿Por qué este archivo (`miembros.service.ts`) no sabe qué es una petición HTTP?**

porque es logica de negocio y reglas de la aplicacion

**4. ¿Por qué el Service se inyecta sin token en el Controller, y el repositorio sí necesita uno?**
porque service funciona en tiempo de ejecucion mientras que  el repositorio requiere un token flecha dirigido a la clase que necesita instanciar

**5. ¿Qué prueba, en los hechos, que agregar Miembros no rompió nada de Inscripciones?**

Que las rutas o endpoints hechos en la practica anterior siguen funcionando