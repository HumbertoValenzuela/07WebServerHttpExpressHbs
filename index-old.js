
const http = require('http');

// Crea un servidor local para recibir datos
const server = http.createServer( ( req, res ) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  // res.write('Hola');

  let salida = {    
      nombre: 'Humberto',
      edad: 40,
      url: req.url
    }

  res.write( JSON.stringify( salida ) );

  res.end();

});

server.listen(8080);
console.log('Escuchando el puerto8080');





// 07 Webserver - HTTP - EXPRESS – HBS
// 062 Introducción a la sección
// El WebServer es usado en framework como react Vue Angular, porque el objetivo crear una carpeta hacerla pública en Heroku(Servicio Web).
// Se utilizará un template Engine(En reemplazo de React). Nos permite a la página web Dinámica

// Aquí cubriremos varios temas como: 

// Uso y configuración de Express
// Servir contenido estático
// Template engines
// Handebars
// Helpers
// Parciales
// Variables
// Despliegues en Heroku y Github
// Hacer carpetas públicas en la web

// 064 Inicio de proyecto - WebServer
// npm init para crear el package.json
// ir a - https://nodejs.org/dist/latest-v16.x/docs/api/http.html
// Nos permite crear un WebServer, con dos líneas de código es posible crear contenido en la Web
// res.write('hola')
// res.writeHead - json - crear un objeto y enviarlo
// url / son las solicitudes del usuario
// terminal node index
// ver en navegador http://localhost:8080/
// PostMan - Probar la dirección - http://localhost:8080/
// estos pasos son posibles realizarlo con Express, facilitando el código

// 065 Introduccion a EXPRESS
// npm i express --save
// nodemon server.js
// http://localhost:3000/
// PostMan - http://localhost:3000/
// Solicitud GET cuando el Path es / y ejecuta la función callback
//La función send detecta el objeto y lo transforma en formato json
// Enviar un json usando express
// app.listen tiene un callback

// 066 Servir contenido estatico
// Página web utilizando un WebServer montado en Express
// Carpeta public que será el contenido que será pública en Internet
// mostrar index.html a la Web
// Middleware es una instruccion o un callback que se va ejecutar siempre no importa la url
// Notar que existen dos rutas '/' es posible que arroje cualquira
// http://localhost:3000/home.html es público

// 068 Handlebars
// HBS
// npm install hbs --save
// Este paquete le permite a express Renderizar estas páginas que usan este tipo de sintaxis(handlebars) y poder mandar una respuesta al cliente  
// server - render renderiza home.hbs
// Colocar variables en home.hbs {{ variable }}
// server - indicar a express que existen variables

// 069 Usando parciales con HBS
// Los parciales usado para importar header,footer, cosas reutilizable. registerPartial bloque de html para reutilizar
// Folder que contengan html __dirname
// home.hbs: The partial head could not be found
// solución bajar reiniciar nodemon
// nodemon: escuchar cambios de archivos hbs
// terminal server e- js,hbs,html,css
// agregar el about

// 070 Usando helpers
// usar helpers hbs para el año
// Helpers se dispara cuando el template lo requiere
// about pide una variable y home dos variables. Si les falta variables lo va a buscar en registerHelper. Sino lo encuentra dará undefined
// Al tener más helpers se tiene un problema, código cargado
// sacarlo de server.js 

// 071 Heroku - Subiendo nuestra aplicación a producción
// heroku -v
// Si el comando no se encuentra entonces instalar heroku CLI o reiniciar
// Se desconoce el puerto que heroku dará como Puerto Port
// Variables de entorno globales
// package.json - 
// "start": "node server.js",
// Terminal probar el comando npm start
// package.json - "nodemon": "nodemon server.js"
// Terminal - npm run nodemon
// Notar la diferencia: start es una palabra especial
// Heroku va a ejecutar el comando "start": "node server.js"
// Crear .gitignore