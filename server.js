const express = require('express');
const app = express ();
const path = require('path');
const bodyParser = require('body-parser');
let sortClimbers = () => {
    let climberAr = Array.from(climbers.values());
    return climberAr.sort(function(a,b) {return (a.totalPoints > b.totalPoints) ? -1 : ((b.totalPoints > a.totalPoints) ? 1 : 0);} );
};


class Climber{
    constructor(ClimberName, ClimberId, ClimberTotalPoints, isDisqualified)
    {
        this.name = ClimberName;
        this.id = ClimberId;
        this.totalPoints = ClimberTotalPoints;
        this.isDisqualified = isDisqualified;
    }
};

let climbers = new Map();
climbers.set('Jon Snow', new Climber('Jon Snow', 1, 0, false));
climbers.set('Jaime Lannister', new Climber('Jaime Lannister', 2, 0, false));
climbers.set('Ramsay Bolton', new Climber('Ramsay Bolton', 3, 0, false));
climbers.set('Arya Stark', new Climber('Arya Stark', 4, 0, false));
climbers.set('Brienne Of Tarth', new Climber('Brienne Of Tarth', 5, 0, false));
climbers.set('Daenerys Targaryen', new Climber('Daenerys Targaryen', 6, 0, false));
console.log(climbers);

class Route {
    constructor(name, id, points) {
        this.name = name;
        this.id = id;
        this.points = points;
    }
};

let routes = new Map();
routes.set('1', new Route('Casterly Rock', 1, 10));
routes.set('2', new Route('Wall', 2, 100));
routes.set('3', new Route('Eyrie', 3, 80));
routes.set('4', new Route('Riverrun', 4, 40));
routes.set('5', new Route('Winterfell', 5, 80));
console.log(routes);

class Time {
    constructor(threshold, id, points) {
        this.threshold = threshold;
        this.id = id;
        this.points = points;
    }
};
let climbersTime = new Map();
climbersTime.set('<1', new Time('less than 1 minute', '<1', 10));
climbersTime.set('<2', new Time('less than 2 minutes', '<2', 8));
climbersTime.set('<3', new Time('less than 3 minutes', '<3', 5));
climbersTime.set('>=3', new Time('3 minutes and more', '>=3', 2));
console.log(climbersTime);

app.use(express.static(
    path.join(__dirname, './src/static')
    )
);
app.use(bodyParser.urlencoded({
    extended : true,
}));

app.use(bodyParser.json());

app.post('/sent', (req, res) => {
    console.log(req.body);
    const {name, routeId, time, isDisqualified} = req.body;
        console.log(name);
        console.log(routeId);
        let climber = climbers.get(name);
        console.log(routes);
        let route = routes.get(routeId);
        console.log(route);
        climber.totalPoints += route.points;
        let ClimberTime = climbersTime.get(time);
        climber.totalPoints += ClimberTime.points;

    console.log(climbers);
    console.log(name, route, time, isDisqualified);
    res.send('Thank you for your data!');
});

app.get('/climbers', (req, res) => {

    res.send(Array.from(climbers.values()));
});

app.get('/routes', (req, res) => {

    res.send(Array.from(routes.values()));
});

app.get('/time', (req, res) => {

    res.send(Array.from(climbersTime.values()));
});

app.get('/ranking',(req, res) => {
    res.send(sortClimbers());
});

app.get('/rankings',(req, res) => {
    app.use('ranking', express.static(__dirname + './src/static'));
    res.sendFile(__dirname + '/src/static/ranking.html');
});


app.delete('/climbers/:name', (req, res) => {
    const nameToDelete = req.params.name;
    climbers.delete(nameToDelete);

    res.send(sortClimbers());
});

app.listen(3000, ()	=>	{
    console.log('Serwer is listening on	http://localhost:3000');
});