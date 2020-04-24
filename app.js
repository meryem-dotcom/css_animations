const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');

app.engine('hbs', exphbs({
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'views/partials'),
    defaultLayout: 'layout.hbs'
}));

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    //let pageContent={}
    res.render('anasayfa', {
        adi: 'meryem',
        soyadi: 'balci'
    });
})
app.get('/animasyon', (req, res) => {
    res.render('deneme', {
        layout: 'layout2.hbs'
    });
});

app.listen(3022, () => {
    console.log('http://localhost:3022');
})