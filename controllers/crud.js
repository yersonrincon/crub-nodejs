const conexion = require('../database/db');
exports.save = (req, res) => {
  const nombre = req.body.nombre
  const apellido = req.body.apellido;
  const direccion = req.body.direccion;
  const edad = req.body.edad;
  const genero = req.body.genero;
  conexion.query('insert into users set ?', { nombre: nombre, apellido: apellido, direccion: direccion, edad: edad, genero: genero }, (error, results) => {
    if (error) {
      console.log(error);
    } else {

      res.redirect('/');

    }
  })

}
exports.update = (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const direccion = req.body.direccion;
  const edad = req.body.edad;
  const genero = req.body.genero;

  conexion.query('update  users set ? WHERE id= ?', [{ nombre: nombre, apellido: apellido, direccion: direccion, edad: edad, genero: genero }, id], (error, results) => {

    if (error) {
      console.log(error);
    } else {

      res.redirect('/');

    }
  })

}


exports.consultar = (req, res) => {

  genero = req.body.genero;
  console.log(genero);

  conexion.query('select * from  users  WHERE genero= ?', [genero], (error, results) => {

    if (error) {
      throw error;
    } else {
      //  results = JSON.stringify( results);
      //  res.send(results);
      res.render('index', { results: results });
    }
  })

}

exports.edad = (req, res) => {
  let edad = req.body.edad;
  conexion.query(`select * from users WHERE edad ${edad}  `, (error, results) => {

    if (error) {
      throw error
    } else {
      //  results = JSON.stringify( results);
      //   res.send(results);
      // console.log({results:results});
      res.render('index', { results: results });
    }
  })
}



