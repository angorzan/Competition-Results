const expect = require("chai").expect;
const User = require("../src/js/app_test.js").User;

// const Life = require("../src/Life.js");
// const Game = require("../src/Game.js");

const assert = require('assert');
describe('getName', function () {
    describe('gives name', function () {
        it('gives name', function () {
            expect(User.getName()).equal('John');
        });
    });
});

// describe('Life', function () {
//     describe('gives life', function () {
//
//         it('check life', function () {
//             let life = new Life(true);
//             expect(life.getAlive()).equal(true);
//         });
//
//         it('killing', function () {
//             let life = new Life(true);
//             life.setAlive(false);
//             expect(life.getAlive()).equal(false);
//         });
//
//         it('check number of alive neighbours', function () {
//             let board = [
//                 [new Life(true), new Life(false), new Life(false), new Life(true)],
//                 [new Life(true), new Life(false), new Life(false), new Life(true)],
//                 [new Life(false), new Life(false), new Life(true), new Life(true)],
//                 [new Life(true), new Life(false), new Life(true), new Life(true)],
//             ];
//             let game = new Game(board, 4, 4);
//             expect(game.numberOfAliveNeighbours(2, 2)).equal(4);
//         });
//     });
// });