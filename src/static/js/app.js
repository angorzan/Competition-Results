document.addEventListener('DOMContentLoaded', () => {

    const audio = new Audio('./mp3/GameofThrones.mp3');
    const ClimberNameField = document.querySelector('[name="ClimberName"]');
    const routeNumberField = document.querySelector('[name="routeNumber"]');
    const timeField = document.querySelector('[name="time"]');
    const isDisqualifiedField = document.querySelector('[name="isDisqualified"]');
    const DisableCheck = document.querySelector('#isDisqualified');
    const submitBtn = document.querySelector('#submitBtn');
    const select = document.querySelectorAll('select:not(#isDisqualified)');
    const soundOn = document.querySelector('#sound-on');
    const soundOff = document.querySelector('#sound-off');

    soundOn.addEventListener('click', ()=>{
        audio.play()
    });
    soundOff.addEventListener('click',()=>{
        audio.pause()
    });
    DisableCheck.addEventListener('change', function(){
        DisableCheck.value === 'true' ? select.forEach(select => select.disabled = true)
            : select.forEach(select=> select.disabled = false);
    });


    submitBtn.addEventListener('click', event => {
        event.preventDefault();
        const name = ClimberNameField.value;
        const routeId = routeNumberField.value;
        const time = timeField.value;
        const isDisqualified = isDisqualifiedField.value;
        const thanksInfo = document.querySelector('#thanksInfo');
        const thanksBtn = document.querySelector('#thanksBtn');
        const disqualificationInfo = document.querySelector('#disqualificationInfo');

        const disqualificationBtn = document.querySelector('#disqualificationBtn');
        fetch('/sent', {
            method : 'POST',
            body   : JSON.stringify({
                name,
                routeId,
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

        DisableCheck.value === 'true' ? disqualificationInfo.style.display = 'block' : thanksInfo.style.display = 'block';

        disqualificationBtn.addEventListener('click', ()=> {
                        disqualificationInfo.style.display = 'none';
                        thanksInfo.style.display = 'block';
        });
        // thanksBtn.addEventListener('click', ()=>{
        //     thanksInfo.style.display = 'none';
        //
        //     })

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

    fetch('/time', {
        method : 'GET',
        headers: {
            'Content-Type' : 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {
            let climbersTime = [];
            console.log(data);
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