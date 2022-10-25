 const mysql =require ('mysql');
 

 const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'crubnode'
 });

 conexion.connect((error)=>{
    if(error){
        console.error('el error de conexion '+error);
        return
    }
    console.log('conectado ala base de datos ')
 });

 module.exports= conexion;