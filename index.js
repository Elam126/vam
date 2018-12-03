const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('<h2>Venzo Consultancy Services LLP</h2>');
});

app.listen(8080, () => {
    console.log('Working on Port 8080');
 });