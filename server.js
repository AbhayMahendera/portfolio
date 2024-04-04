const express = require('express');
const path = require('path');
const app = express();
const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.static('src'));
//app.use('/public', express.static(path.join(__dirname, "public")));
//app.use('/src', express.static(path.join(__dirname, "src")));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});


app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
});

app.get('/projects', (req,res) => {
    res.sendFile(path.join(__dirname, '/views/projects.html'));
});

app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));
