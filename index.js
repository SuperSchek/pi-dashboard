const express        = require('express');
const bodyParser     = require('body-parser');
const path           = require('path');
const app            = express();

const port = 8080;

// viewed at http://localhost:8080
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/test', (req, res) => {
    res.send({"test": "Hi"});
});

app.listen(port, () => {
    console.log('Pi Dashboard is live on port ' + port);
});