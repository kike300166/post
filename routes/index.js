var express = require('express');
const db = require('../database');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let name = 'Jose galindez'
  res.render('index', {
    title: 'FORMULARIO DE CONTACTO',
    Nombre: Nombre,
  });
});

router.post('/', function(req, res, next) {
  let Nombre = req.body.Nombre;
  let Correo = req.body.Correo;
  let Comentario = req.body.Comentario;
  let Fecha = new fecha(); // @todo falta formatear la fecha
  let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress; // @todo falta formatear la ip

  db.insert(Nombre, Correo, Comentario, date, ip);

  res.redirect('/');
});

router.get('/contactos', function(req, res, next) {
  db.select(function (rows) {
    console.log(rows);
  });
  res.send('ok');
});

module.exports = router;
