let counter = 0;

function counterMiddleware(req, res, next) {
    console.log('Ilość odwiedzin:', ++counter);
    next();
}

module.exports = counterMiddleware;