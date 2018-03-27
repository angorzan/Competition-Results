document.addEventListener('DOMContentLoaded', () => {

    const rankingBody = document.querySelector('#rankingBody');
    const resultRow = document.querySelector('#result');

    fetch('/ranking', {
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

            climbers.forEach((climber, i)=> {
                let newTr = document.createElement('tr');
                let firstTd = document.createElement('td');
                let secondTd = document.createElement('td');
                let thirdTd = document.createElement('td');
                let disqualifiedBtn = document.createElement('button');
                rankingBody.appendChild(newTr);
                newTr.appendChild(firstTd);
                newTr.appendChild(secondTd);
                newTr.appendChild(thirdTd);
                newTr.appendChild(disqualifiedBtn);
                disqualifiedBtn.className = "btn btn-warning";
                disqualifiedBtn.innerText = "DISQUALIFY";
                firstTd.className = "col-md-4 col-xs-4 col-sm-4";
                secondTd.className = "col-md-4 col-xs-4 col-sm-4";
                thirdTd.className = "col-md-4 col-xs-4 col-sm-4";
                firstTd.innerText = i;
                secondTd.innerText = climber.name;
                thirdTd.innerText = climber.totalPoints;

                // newTr.innerText = climber.name;
            });
        });

});