const express = require('express');
const app = express ();
const path = require('path');
const bodyParser = require('body-parser');
const typeOf = require('typeof');
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
climbers.set('1', new Climber('Jon Snow', 1, 0, false));
climbers.set('2', new Climber('Jaime Lannister', 2, 0, false));
climbers.set('3', new Climber('Ramsay Bolton', 3, 0, false));
climbers.set('4', new Climber('Arya Stark', 4, 0, false));
climbers.set('5', new Climber('Brienne Of Tarth', 5, 0, false));
climbers.set('6', new Climber('Daenerys Targaryen', 6, 0, false));
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
     const {climberId, routeId, time, isDisqualified} = req.body;
     let climber = climbers.get(climberId);
     let route = routes.get(routeId);
     climber.totalPoints += route.points;
     let ClimberTime = climbersTime.get(time);
     climber.totalPoints += ClimberTime.points;
     res.send(climber);
});

app.get('/climbers', (req, res) => {

    res.send(Array.from(climbers.values()));
});

app.get('/routes', (req, res) => {

    res.send(Array.from(routes.values()));
});

app.get('/addclimbers', (req, res) => {
    app.use('add_climbers', express.static(__dirname + './src/static'));
    res.sendFile(__dirname + '/src/static/add_climbers.html');
});
app.get('/time', (req, res) => {

    res.send(Array.from(climbersTime.values()));
});

app.get('/ranking',(req, res) => {
    res.send(sortClimbers());
});

app.get('/',(req, res) => {
    app.use('ranking', express.static(__dirname + './src/static'));
    res.sendFile(__dirname + '/src/static/index.html');
});


app.delete('/climbers/:id', (req, res) => {
    const idToDelete = req.params.id;
    climbers.delete(idToDelete);

    res.send(sortClimbers());
});

app.listen(3000, ()	=>	{
    console.log('Server is listening on http://localhost:3000');
});

module.exports = app;
