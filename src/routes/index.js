const router = require('express').Router();
const path = require('path');
//cada vez que alguien entre a la ruta inicial
router.get('/',(req, res)=>{
    //voy a responder con un archivo, que esta en tal direccion
    //el path join para unir la direccion presente en dirname del index
    //mas el url view donde esta el html, se usa esa extension de path
    //porque si se abre esta app en window no podra leer por las barras 
    //res.sendFile( path.join(__dirname, 'views/index.html'))
    
    //al usar render sabe que estamos usando la configuracion ejs
    //res.render('index.ejs',{title: 'primer pagina con Node'});
    
    res.render('index.html',{title: 'primer pagina con Node'});
});

router.get('/contact',(req, res)=>{
    //al usar render sabe que estamos usando la configuracion ejs
    res.render('contact.html',{title: 'primer pagina con Node'});
});
/* router.get('/Menu',(req, res)=>{
    //al usar render sabe que estamos usando la configuracion ejs
    res.sendFile(path.join(__dirname, '../views/Menu/index.html'));
}); */
router.get('/Menu',(req, res)=>{
    //al usar render sabe que estamos usando la configuracion ejs
    res.render('Menu/index.html',{title: 'primer pagina con Node'});
});
module.exports = router;