# Desafío Backend Developer

El desafío consta de crear un servidor web utilizando Python y Django o Node JS y Express. En el  caso de utilizar Node JS, el ORM puede ser Sequelize o Mongoose (queda a elección). El servidor  web no necesita tener una interfaz visual, todos los test se van a ejecutar por consola utilizando las  rutas.  


Las etapas del proyecto están creadas con el fin de evaluar el conocimiento del desarrollo, por lo que no es necesario terminar todas las etapas para entregar el desafío.
Tareas: 

### 1) Crear un modelo de usuario el cual tenga la siguiente información: 
 
email ( string, unico)  
password (string )  
accountName (string)  
appKey ( String )  
appToken ( String )  
metodoDeFacturacion ( string – solo uno - , EJ: ‘MercadoPago’, ‘VTEX’ , ‘Prisma’, etc)  isActive ( Bool)  

### 2) Crear rutas para realizar las siguientes acciones:  
2.1) Listar todos los usuarios de la base de datos  
2.2) Crear un usuario enviando todos los campos del modelo.  
2.2) Listar todos los usuarios que posean método de pago enviado por query:   EJ:  
 /users?metodoDeFacturacion=VTEX  
 /users?metodoDeFacturacion=PRISMA  
2.3) Ruta que devuelva la siguiente información:  
{  
 usuarios:{  
 activos: 2 (el numero no es representativo) ,  
 inactivos:3 (el numero no es representativo)  
 }  
}  
2.4) Ruta para actualizar la información de usuarios dado el mail, ya sea uno solo o múltiples.  
2.5) Ruta que dada la siguiente información, traiga una lista de órdenes de VTEX ( se adjunta la  URL de la documentación)  
accountName: “cruce”  
appKey: ”vtexappkey-cruce-PMPMOM”  
appToken:  
”SRVXVMQXOVUXAEJAPWEWXBZZZQZLKKXRQKHMBHXAXGIKACEFGXOIYIRRSWXFMENEYDHQXXZHZDYRSPYXMUENWOSISPUEKSNTTDLXVNHJXGJVKAYCYASSZAIJKYXHDUWG”  
Documentación: https://developers.vtex.com/vtex-developer-docs/reference/orders#listorders

Aclaración: en el momento en que uno realiza la consulta a VTEX utilizar los siguientes datos:  

environment: “vtexcommercestable” 
f_creationDate: “creationDate:[2016-01-01T02:00:00.000Z TO  
2021-01-01T01:59:59.999Z]” 

Utilice como referencia la información que aparece a la derecha, puede utilizar Node JS o  Javascript.  
La consulta anterior tiene una respuesta en el siguiente formato:  
{  
 list: [],  
 facets:[].  
 Paging:{},  
 stats:{},  
}  
Solo es necesario devolver la información de LIST  
2.6) Ruta que dada una lista de mails que se envía al servidor, consultar a VTEX la lista de órdenes  de cada usuario, para poder realizar este punto cada usuario que se envíe al servidor debe tener  cargada ya en la base de datos la información de appKey, appToken y accountName, utilizar la  misma para todos.  
Ej. de información que se envía al servidor:  
{  
 emails:[  
 “matias@cruce.com”,  
 “franco@cruce.com”,  
 “flavio@cruce.com”,  
 ]  
}  
Ej. de información que devuelve el servidor:  
{  
 listaOrdenes:  
 [  
 {  
 mail:“matias@cruce.com”,  
 ordenes: [listaDeOrdenesDeVtex] :  
 },  
 {  
 mail:“franco@cruce.com”,  
 ordenes: [listaDeOrdenesDeVtex] 
 },  
 {  
 mail:“flavio@cruce.com”,  
 ordenes: [listaDeOrdenesDeVtex]  
 }  
 ]  
}  
Aclaración final:
Las rutas pueden ser únicas o compartidas por funcionalidad, queda a criterio del desarrollador. 