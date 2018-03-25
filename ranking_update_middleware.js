function rankingUpdateMiddleware(req, res, next) {
    let ranking = climbers.sort(function(a,b) {return (a.totalPoints > b.totalPoints) ? 1 : ((b.totalPoints > a.totalPoints) ? -1 : 0);} );

    next();
}

module.exports = rankingUpdateMiddleware;