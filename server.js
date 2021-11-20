const express = require('express');//importar
const app = express();//Permite utilizar

const hbs = require('hbs');
// Usar los helpers
require('./hbs/helpers');
 
const port = process.env.PORT || 3000;
// Solicitud GET cuando el Path es / y ejecuta la función callback
// app.get('/', function (req, res) {
//   res.send('Hello World');
// });
 
// app.listen(3000);

app.use( express.static( __dirname + '/public') );

// app.get('/', function (req, res) {
  
//   let salida = {    
//     nombre: 'Humberto',
//     edad: 40,
//     url: req.url
//   }

//   res.send( salida );//La función send detecta el objeto y lo transforma en formato json
// });

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

//Express HBS 
app.set('view engine', 'hbs');



// Render home.hbs
app.get('/', function (req, res) {
  res.render( 'home', {
    nombre: 'humbeRto'    
  } );  
});

// Render about.hbs
app.get('/about', function (req, res) {
  res.render( 'about' );
});

// app.get('/data', function (req, res) {
//   res.send( 'hola Data' );
// });

app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});