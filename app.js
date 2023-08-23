import dotenv from 'dotenv';
import express from 'express';
import hbs from 'hbs';
import { fileURLToPath } from 'url'; // alternativa al usar un 
import { dirname } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = process.env.PORT; // con esto se hace la creacion 

//-----ACA SE IMPLEMENTO EL CONTROLLER

//Handlebars
app.set('view engine','hbs');// ya con esto puedo renderizar vistas sensillas
hbs.registerPartials(`${__dirname}/views/partials`,function(err){});

//para servir contenido estatico
app.use(express.static('public'))

app.get('/',(req,res) => {
    res.render('home',{
        nombre: 'Fernando Herrara',
        titulo: 'Curso de Node'
    });
});

//ejercicio de que funcione el link sin el .html
app.get('/generic',(req,res) => {
    res.render('generic',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/elements',(req,res) => {
    res.render('elements',{
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});

app.get('/hola-mundo', function(req,res){
    res.send('Hola mundo en su respectiva ruta')
});

app.get('*', (req,res) => {
    res.sendFile(`${__dirname}/public/back/404.html`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})