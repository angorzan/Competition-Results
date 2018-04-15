document.addEventListener('DOMContentLoaded', () => {
    const rankingBody = document.querySelector('#rankingBody');
    let disqualifyAndSetnewRanking = (data) => {
        let climbers = [];
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
            isDisqualifiedBtn.innerText = "Disqualify";
            firstTd.className = "col-md-3 col-xs-3 col-sm-3";
            secondTd.className = "col-md-4 col-xs-4 col-sm-4";
            thirdTd.className = "col-md-4 col-xs-4 col-sm-4";
            firstTd.innerText = i + 1;
            secondTd.innerText = climber.name;
            thirdTd.innerText = climber.totalPoints;

            isDisqualifiedBtn.addEventListener('click', () => {

                fetch(`/climbers/${climber.id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then(r => r.json())
                    .then(data => {
                        while (rankingBody.firstChild) {
                            rankingBody.firstChild.remove();
                        }
                        disqualifyAndSetnewRanking(data)
                    }
            )
            })
        })
    };

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