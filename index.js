// index.js
// where your node app starts

// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});


/**
 * Según los requisitos, se obtiene la IP del usuario, el idioma preferido del usuario y el software de usuario.
 * URL de consulta: [base url]/api/whoami
 * Se devuelve la IP, el idioma y el software del usuario en formato:
 * {
 *  "ipaddress":"::ffff:159.20.14.100",
 *  "language":"en-US,en;q=0.5",
 *  "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
 * 
 */
app.get('/api/whoami', function (req, res) {
  // Obtener la IP del usuario
  const ip = req.ip;

  // Obtener el idioma preferido del usuario desde las cabeceras de la petición
  const language = req.headers['accept-language'];

  // Obtener el software de usuario
  const software = req.headers['user-agent'];

  // Devolver la IP, el idioma y el software del usuario
  res.json({ ipaddress: ip, language: language, software: software });

})


// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
