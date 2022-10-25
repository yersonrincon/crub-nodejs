const express = require('express');
const conexion = require('./database/db');
const router = express.Router();

router.get('/',(req,res)=>{

     conexion.query('select * from users',(error,results)=>{
    if(error){
        throw error;
    
   }else {
    res.render('index',{results:results});
   }
})
});
router.get('/data',(req,res)=>{

    conexion.query('select * from users',(error,results)=>{
   if(error){
       throw error;
   
  }else {
  //  res.render('index',{results:results});
     data = JSON.stringify( results);
     res.send(data);
  }
})
});

//ruta para crear registros
router.get('/create', (req,res)=>{
    res.render('create');
})
// ruta para editar registros
router.get('/edit/:id', (req,res)=>{
    id= req.params.id
    conexion.query('select * from users where id =?',[id],(error,results)=>{
       console.log('dbgdbdg',id)
        if(error){
            throw error;
        }else{
            res.render('edit',{usuarios:results[0]});
        }
    })
})
// ruta pare eliminar
router.get('/delete/:id', (req,res)=>{
   const id= req.params.id
    conexion.query('DELETE FROM `users` WHERE  id =?',[id],(error,results)=>{
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    })
  
})
const crud = require ('./controllers/crud');
router.post('/save',crud.save);
router.post('/update',crud.update);
router.post('/consultar',crud.consultar);
router.post('/edad',crud.edad);


module.exports = router