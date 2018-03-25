const express = require('express');
const app = express ();
const path = require('path');
const bodyParser = require('body-parser');
const pointscounterMiddleware = require('./points_counter_middleware');
const rankingUpdateMiddleware = require('./ranking_update_middleware');

class Climber{
    constructor(ClimberName, ClimberId, ClimberTotalPoints)
    {
        this.name = ClimberName;
        this.id = ClimberId;
        this.totalPoints = ClimberTotalPoints;
    }
};

let JonSnow = new Climber('Jon Snow', 1, 0);
let JaimeLannister = new Climber('Jaime Lannister', 2, 0);
let RamsayBolton = new Climber('Ramsay Bolton', 3, 0);
let AryaStark = new Climber('Arya Stark', 4, 0);
let BrienneOfTarth = new Climber('Brienne Of Tarth', 5, 0);
let DaenerysTargaryen = new Climber('Daenerys Targaryen', 6, 0);
let climbers = [];
climbers.push(JonSnow, JaimeLannister, RamsayBolton, AryaStark, BrienneOfTarth, DaenerysTargaryen);
console.log(climbers);


class Route {
    constructor(name, id, points) {
        this.name = name;
        this.id = id;
        this.points = points;
    }
};

let CasterlyRock = new Route('Casterly Rock', 1, 10);
let Wall = new Route('Wall', 2, 100);
let Riverrun = new Route('Riverrun', 4, 40);
let Winterfell = new Route('Winterfell', 5, 80);
let routes = [];
routes.push(CasterlyRock, Wall, Riverrun, Winterfell);
console.log(routes);
app.use(rankingUpdateMiddleware);


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
    app.use(pointscounterMiddleware);
    console.log(climbers);
    // console.log(name, route, time, isDisqualified);
    res.send('Thank you for your data!');
});


// app.get('/sent',(req, res) => {
//     res.send('Thank you for your data!');
// });


app.get('/rankings',(req, res) => {

    res.send(`Total points ranking: ${ranking}`);
});

app.listen(3000, ()	=>	{
    console.log('Serwer is listening on	http://localhost:3000');
});