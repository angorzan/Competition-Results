document.addEventListener('DOMContentLoaded', () => {

    function Climber(ClimberName, ClimberId, ClimberTotalPoints) {
        this.name = ClimberName;
        this.id = ClimberId;
        this.totalPoints = ClimberTotalPoints;
    };

    let JonSnow =new Climber('JonSnow', 1, 0);
    let JaimeLannister = new Climber('JaimeLannister', 2, 0);
    let RamsayBolton = new Climber('RamsayBolton', 3, 0);
    let AryaStark = new Climber('AryaStark', 4, 0);
    let BrienneOfTarth = new Climber('BrienneOfTarth', 5, 0);
    let DaenerysTargaryen = new Climber('DaenerysTargaryen', 6, 0);
    let climbers = [];
    climbers.push(JonSnow, JaimeLannister, RamsayBolton, AryaStark, BrienneOfTarth, DaenerysTargaryen);
    console.log(climbers);

    function Route (name, id, points){
        this.name = name;
        this.id = id;
        this.points = points;
    };

    let Greywater = new Route('Greywater Watch', 1, 10);
    let Wall = new Route('Wall', 2, 100);
    let Riverrun = new Route('Riverrun', 4, 40);
    let Winterfell = new Route('Winterfell', 5, 80);
    let routes = [];
    routes.push(Greywater, Wall, GoldLoaks, Riverrun, Winterfell);
    console.log(routes);

});