const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const chaiSorted = require("chai-sorted");
const should = chai.should();
const expect = chai.expect;



chai.use(chaiHttp);
chai.use(chaiSorted);

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
                res.body.totalPoints.should.equal(108);
                done();
            })

    });
    it('should sort the descending order of all players in relation to their total points', function(done){
        chai.request(server)
            .get('/ranking')
            .end(function(err, res){
                expect(res.body).to.be.descendingBy('totalPoints');
                done();
            })

    });
    it('should remove disqualified Ramsay Bolton', function(done){
        chai.request(server)
            .delete('/climbers/3')
            .end(function(err, res){
                expect(res.body.filter(climber => climber.id === 3)).to.have.length(0);
                done();
            })
    });

});
