const express = require('express');
const app = express ();
const path = require('path');
app.use(express.static(
    path.join(__dirname, './src/static')
    )
);

app.get('/',(req, res) => {
    res.send('Express.js z angorzan!');
});

app.get('/sent',(req, res) => {
    res.send('Thank you for your data!');
});

app.get('/rankings',(req, res) => {
    res.send('Total points ranking');
});

app.listen(3000, ()	=>	{
    console.log('Serwer is listening on	http://localhost:3000');
});