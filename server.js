const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/movies', (req, res) => {
    res.sendFile(__dirname + `/src/mockData.js`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
});