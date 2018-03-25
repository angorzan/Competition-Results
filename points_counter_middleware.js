function pointscounterMiddleware(req, res, next) {
    // console.log('Ilość odwiedzin:', ++counter);
    if (name === 'Jon Snow') {
        if (route === '1') {
            JonSnow.totalpoints += 10;

        }
        else if (route === '2') {
            JonSnow.totalpoints += 100;
        }
        else if (route === '3') {
            JonSnow.totalpoints += 40;
        }
        else {
            JonSnow.totalpoints += 80;
        }
    }
    next();
}

module.exports = pointscounterMiddleware;