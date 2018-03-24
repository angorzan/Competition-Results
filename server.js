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

app.listen(3000, ()	=>	{
    console.log('Serwer is listening on	http://localhost:3000');
});