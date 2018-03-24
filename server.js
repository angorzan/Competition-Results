const express = require('express');
const app = express ();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(
    path.join(__dirname, './src/static')
    )
);
app.use(bodyParser.urlencoded({
    extended : true,
}));

app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('Express.js z angorzan!');
});

app.post('/sent', (req, res) => {
    console.log(req.body);
    const {name, route, time, isDisqualified} = req.body;
    console.log(name, route, time, isDisqualified);
    res.send('Thank you for your data!');
});

// app.get('/sent',(req, res) => {
//     res.send('Thank you for your data!');
// });


app.get('/rankings',(req, res) => {
    res.send('Total points ranking');
});

app.listen(3000, ()	=>	{
    console.log('Serwer is listening on	http://localhost:3000');
});