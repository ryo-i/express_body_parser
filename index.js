const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

// Form設定
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/form', urlencodedParser, (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    console.log('name->' + name);
    res.send('こんにちは！' + name + 'さん');
});

// Fetch API設定
const jsonParser = bodyParser.json();
 
app.post('/fetch', jsonParser,  (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    console.log('name->' + name);
    res.send('こんにちは！' + name + 'さん');
});

app.listen(3000, () => {
    console.log('Start server port:3000');
});