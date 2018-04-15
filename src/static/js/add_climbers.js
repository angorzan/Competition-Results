document.addEventListener('DOMContentLoaded', () => {

    const climberIdField = document.querySelector('[name="climberId"]');
    const routeNumberField = document.querySelector('[name="routeNumber"]');
    const timeField = document.querySelector('[name="time"]');
    const submitBtn = document.querySelector('#submitBtn');

    submitBtn.addEventListener('click', event => {
        event.preventDefault();
        const climberId = climberIdField.value;
        const routeId = routeNumberField.value;
        const time = timeField.value;
        const thanksInfo = document.querySelector('#thanksInfo');
        thanksInfo.style.display = 'block';
        setTimeout(()=>{
            thanksInfo.style.display = 'none';
        }, 1000);
        fetch('/sent', {
            method : 'POST',
            body   : JSON.stringify({
                climberId,
                routeId,
                time,
            }),
            headers: {
                'Content-Type' : 'application/json',
            },
        })
            .then(r => r.text())
            .then(data => {
            });

    });

    fetch('/climbers', {
        method : 'GET',
        headers: {
            'Content-Type' : 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {
            let climbers = [];
            data.forEach(item=> climbers.push(item));
            let climberId = document.querySelector('#climberId');
            climbers.forEach(climber=> {
                let option = document.createElement('option');
                climberId.appendChild(option);
                option.setAttribute('value', climber.id);
                option.innerText = `Climber nr ${climber.id} - ${climber.name}`;

            });
        });

    fetch('/routes', {
        method : 'GET',
        headers: {
            'Content-Type' : 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {
            let routes = [];
            data.forEach(item=> routes.push(item));
            let routeNumber = document.querySelector('#routeNumber');
            routes.forEach(route=> {
                let option = document.createElement('option');
                routeNumber.appendChild(option);
                option.setAttribute('value', route.id);
                option.innerText = route.name;

            });
        });

    fetch('/time', {
        method : 'GET',
        headers: {
            'Content-Type' : 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {
            let climbersTime = [];
            data.forEach(item=> climbersTime.push(item));
            let time = document.querySelector('#time');
            climbersTime.forEach(item=> {
                let option = document.createElement('option');
                time.appendChild(option);
                option.setAttribute('value', item.id);
                option.innerText = item.threshold;
            });
        });
});