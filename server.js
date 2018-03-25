const express = require('express');
const app = express ();
const path = require('path');
const bodyParser = require('body-parser');
const pointscounterMiddleware = require('./points_counter_middleware');
const rankingUpdateMiddleware = require('./ranking_update_middleware');
let winners = require('./ranking_update_middleware');

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
// app.use(rankingUpdateMiddleware);

class Time {
    constructor(threshold, id, points) {
        this.threshold = threshold;
        this.id = id;
        this.points = points;
    }
};
let lessThanOne = new Time('less than 1 minute', '<1', 10);
let lessThanTwo = new Time('less than 2 minutes', '<2', 8);
let lessThanThree = new Time('less than 3 minutes', '<3', 5);
let lessThanFour = new Time('3 minutes and more', '>=3', 2);
let climbersTime = [];
climbersTime.push(lessThanOne, lessThanTwo, lessThanThree, lessThanFour);
console.log(climbersTime);

app.use(express.static(
    path.join(__dirname, './src/static')
    )
);
app.use(bodyParser.urlencoded({
    extended : true,
}));

app.use(bodyParser.json());

// app

app.post('/sent', (req, res) => {
    console.log(req.body);
    const {name, route, time, isDisqualified} = req.body;
    app.use(pointscounterMiddleware);
    console.log(climbers);
    console.log(name, route, time, isDisqualified);
    res.send('Thank you for your data!');
});

app.get('/climbers', (req, res) => {

    res.send(climbers);
});

app.get('/routes', (req, res) => {

    res.send(routes);
});

app.get('/time', (req, res) => {

    res.send(climbersTime);
});


// app.get('/sent',(req, res) => {
//     res.send('Thank you for your data!');
// });


app.get('/rankings',(req, res) => {
    // app.use(rankingUpdateMiddleware);
    climbers.sort(function(a,b) {return (a.totalPoints > b.totalPoints) ? -1 : ((b.totalPoints > a.totalPoints) ? 1 : 0);} );
    res.send(climbers);
});

app.listen(3000, ()	=>	{
    console.log('Serwer is listening on	http://localhost:3000');
});

module.exports = climbers;
module.exports = JonSnow;