const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('<h1>Venzo Consultancy</h1>');
});

app.listen(8080, () => {
    console.log('Working on Port 8080');
 });