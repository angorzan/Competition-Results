document.addEventListener('DOMContentLoaded', () => {


    const ClimberNameField = document.querySelector('[name="ClimberName"]');
    const routeNumberField = document.querySelector('[name="routeNumber"]');
    const timeField = document.querySelector('[name="time"]');
    const isDisqualifiedField = document.querySelector('[name="isDisqualified"]');

    let btn = document.querySelector('#btn');
    btn.addEventListener('click', event => {
        event.preventDefault();
        const name = ClimberNameField.value;
        const route = routeNumberField.value;
        const time = timeField.value;
        const isDisqualified = isDisqualifiedField.value;

        fetch('/sent', {
            method : 'POST',
            body   : JSON.stringify({
                name,
                route,
                time,
                isDisqualified,
            }),
            headers: {
                'Content-Type' : 'application/json',
            },
        })
            .then(r => r.text())
            .then(data => {
                console.log(data);
            });
    });


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

    let CasterlyRock = new Route('CasterlyRock', 1, 10);
    let Wall = new Route('Wall', 2, 100);
    let Riverrun = new Route('Riverrun', 4, 40);
    let Winterfell = new Route('Winterfell', 5, 80);
    let routes = [];
    routes.push(CasterlyRock, Wall, Riverrun, Winterfell);
    console.log(routes);

    let DisableCheck = document.querySelector('#isDisqualified');
    let select = document.querySelectorAll('select:not(#isDisqualified)');
    DisableCheck.addEventListener('change', function(){
        DisableCheck.value === 'true' ? select.forEach(select => select.disabled = true)
            : select.forEach(select=> select.disabled = false);

    });


});