const express = require('express');
const app = express();

app.get('/names',(req, res)=>{
    res.send('Smaplei');
})