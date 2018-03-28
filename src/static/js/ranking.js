document.addEventListener('DOMContentLoaded', () => {
    const audio = new Audio('./mp3/GameofThrones.mp3');
    const rankingBody = document.querySelector('#rankingBody');
    const disqualificationInfo = document.querySelector('#disqualificationInfo');
    const soundOn = document.querySelector('#sound-on');
    const soundOff = document.querySelector('#sound-off');
    let disqualifyAndSetnewRanking = (data) => {
        let climbers = [];
        console.log(data);
        data.forEach(item => climbers.push(item));
        climbers.forEach((climber, i) => {

            let newTr = document.createElement('tr');
            let firstTd = document.createElement('td');
            let secondTd = document.createElement('td');
            let thirdTd = document.createElement('td');
            let isDisqualifiedBtn = document.createElement('button');
            rankingBody.appendChild(newTr);
            newTr.appendChild(firstTd);
            newTr.appendChild(secondTd);
            newTr.appendChild(thirdTd);
            newTr.appendChild(isDisqualifiedBtn);
            isDisqualifiedBtn.className = "btn btn-danger disqualify";
            isDisqualifiedBtn.innerText = "DISQUALIFY";
            firstTd.className = "col-md-3 col-xs-3 col-sm-3";
            secondTd.className = "col-md-4 col-xs-4 col-sm-4";
            thirdTd.className = "col-md-4 col-xs-4 col-sm-4";
            firstTd.innerText = i + 1;
            secondTd.innerText = climber.name;
            thirdTd.innerText = climber.totalPoints;

            isDisqualifiedBtn.addEventListener('click', () => {
                // rankingBody.removeChild(newTr);
                while (rankingBody.firstChild) {
                    rankingBody.firstChild.remove();
                }
                fetch(`/climbers/${climber.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(r => r.json())
                    .then(data => disqualifyAndSetnewRanking(data)
            )
            })
        })
    };

    soundOn.addEventListener('click', ()=>{
        audio.play();
    });
    soundOff.addEventListener('click',()=>{
        audio.pause();
    });


    fetch('/ranking', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(r => r.json())
        .then(data => {
            disqualifyAndSetnewRanking(data);

                        })
                });
