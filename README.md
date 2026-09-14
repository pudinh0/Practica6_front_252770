1- ¿Que pasaria sie el modulo no quedara registrado en la raiz?

NestJs no tendra conocimiento del modulo, no sabra que existe y no funcionara, hara las peticiones http a ese controlador y
se obtendran un 404 de "not found" ya que no se encuentra el modulo

2-¿Por que los metodos del repositorio devuelve promesas si los datos van a estar en memoria?
por la arquitectura utilizada y el desacoplamiento causado por lo asincrono, se definio la interfaz del
reposiotiro utilizando promesas desde el inicio, el servicio espera operaciones asincronas

3-¿Que error aparecio al cambiar a la interfaz y porque la clase si se habia resuelto sola?
el error era el de "Nest cant resolve dependencies" creo,  por que  se instancia por el nombre del tipo
,eso requiere que utilize un token que contenga el tipo


4-¿por que el servicio necesita un token para el repositorio, pero el controlador no lo necesita para el servicio?
se necesita un token porque el tipo de dato que se inyecta es una interfaz, esta desaparece en tiepmo de ejecucion,
por eso necesita el token, que viene siendo el identificador para que nest sepa a que clase se asocia la interfaz


5-¿diferencia entre 400 y 409?
el 400 significa que el servidor no entiende la peticion, o que la estructura de la misma es incorrecta(falta de campos obligatorios
tipo de dato erroneo, etc)

el 409 este se refiere mas que nada a conflictos con el estado actual del servicio o sistema, ej. intentar inscribirse a una clase llena

6-¿por que cambio el codigo de estado de usa ultima peticion despues de cancelar?
por que al cancelar una inscripcion que ya existia, se libero un espacio en ese horario en el repositorio en memoria
