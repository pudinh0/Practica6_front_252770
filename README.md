1- ¿ Que genero el comando nest new?

genero la estructura base del proyectode nestJS junto con la configuracion icial

2-¿Que hace el AppService que ya viene generado?
es como una capa de negocio incial y sencilla, contiene los metodos basicos de getData o getHello, que se encarga de retorna un string para
ver si el servidor esta arriba

3-¿por que la ruta funciona sin declara nada en app.module.ts?
porque nestjs utiliza un sistema basado en modulos y creo que se llama decoradores, cuando ejecutas nest new, el app controller y app service ya vienen declarados e integrados dentro de los arreglos de controllers y providers del app module

4-¿que pasaria si el cuerpo de la peticion viniera vacio?
se evalua como undefined, debido a esto el servidor crearia un lanzaria un internal server error(500)

5-¿En que archivo vive hoy toda la logica de la practica?
toda la logica vive especificamente en el archivo de app.controller.ts ya que es ahi donde definimos la interfaz o clase "Clase", tambien los arreglos en meomoria y los get y post