const express = require('express');



const app = express();

app.get('/api', (req, res) => {

    return res.status(200).send("Hello World");
})

app.get('/jsonApi', (req, res) => {

    return res.status(200).json("Hello World");
});

app.post('/postApi', (req, res) => {
    console.log("BODY >> ", req);
    return res.status(200).send(`Hello, ${req.data}.`);
})

app.listen(8080);