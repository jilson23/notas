const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
app.use('/static', express.static('public'));

app.get('/', (req,res) => {
    const name = req.query.name;
    const age = req.query.age;

    // res.send(`<h1> hola ${name}, tienes ${age} años </h1>`)
    
    const notes = [
        'nota1','nota2','nota3'
    ]
    res.render('index', {notes});
});

app.get('/users/:name', (req,res) =>{
    const name = req.params.name;
    res.send(`Hola ${name}`);
});

app.post('/users', (req, res) => {
    res.status(404);
    res.set('Content-Type', 'text/plain');
    res.send('no se enconro el recurso')
});

app.listen(3000, () => console.log('Listening puerto 3000 ....'));