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
                // tu powinien być middleware do zliczania punktów?
                //tu powinien być warunek do wyświetlania rankingu
                console.log(data);
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
            console.log(data);
            data.forEach(item=> climbers.push(item));
            let climberName = document.querySelector('#ClimberName');
            climbers.forEach(climber=> {
                let option = document.createElement('option');
                climberName.appendChild(option);
                option.setAttribute('value', climber.name);
                option.innerText = climber.name;

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
            console.log(data);
            data.forEach(item=> routes.push(item));
            let routeNumber = document.querySelector('#routeNumber');
            routes.forEach(route=> {
                let option = document.createElement('option');
                routeNumber.appendChild(option);
                option.setAttribute('value', route.id);
                option.innerText = route.name;

            });
        });
    // let DisableCheck = document.querySelector('#isDisqualified');
    // let select = document.querySelectorAll('select:not(#isDisqualified)');
    // DisableCheck.addEventListener('change', function(){
    //     DisableCheck.value === 'true' ? select.forEach(select => select.disabled = true)
    //         : select.forEach(select=> select.disabled = false);
    // });

});