const express = require('express');
const app = express();
const path = require('path');
//configuraciones
app.set('port',3000);
//aca con el view engine le decimos que motor de plantilla
//vamos a usar este caso el ejs
app.set('view engine', 'ejs')
//voy a utilizar los archivos html pero estaran renderizados esos archivos por ejs
app.engine('html', require('ejs').renderFile);
//aca configuramos para que el servidor lea lo que esta adentro de views
app.set('views', path.join(__dirname, 'views'));

//middlewares
//los middlewares son funciones antes que las rutas procesen algo
//ejem.. si un usuario quiere entrar a una url, mediante una funcion
//podemos comprobar que el tenga autorizacion o no
//ejem.. si un usuario quiere enviar un dato podemos pre procesar ese dato
//para que con ese dato haga algo

//routes
app.use(require('./routes/index'));

//archivos estaticos
//este apartado es para decirle a express de llevar
//nuestra carpeta al navegador..."apartado front-end"
//imagenes, fuentes, logotipos
app.use(express.static(path.join(__dirname, 'public')));



//escucha del servidor
app.listen(app.get('port'),()=>{
    console.log('server on port', app.get('port'))
})


