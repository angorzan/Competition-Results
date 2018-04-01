const chai = require('chai');
var chaiHttp = require('chai-http');
const chaiFetch = require('chai-fetch');
const server = require('../server');
const should = chai.should();


chai.use(chaiFetch);
chai.use(chaiHttp);

describe('SettingClimbers', function() {

    it('should list all available / not disqualified climbers/climbers GET', function(done) {
        chai.request(server)
            .get('/climbers')
            .end(function(err, res){
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                done();
            });
    });
    it("should correctly update Deanerys Targaryen's total points after she reached the Wall in less than 2 minutes", function(done){
        chai.request(server)
            .post('/sent')
            .send({'climberId': '6', 'routeId': '2', 'time': '<2', 'isDisqualified': false})
            .end(function(err, res){
                //console.log(res);
                res.body.totalPoints.should.equal(108);
                done();
            })

    });
    it('should')

});
