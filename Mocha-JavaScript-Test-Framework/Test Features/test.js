
var assert = require('assert');

describe('Mathematical operations', function () {
    it.only('Addition of two numbers', function () {    //only this test is executed
        var a = 10
        var b = 10 
        var c = a+b

        assert.equal(c,20);

    });

    it.skip('Subtraction of two numbers', function () {   //skips this test
        var a = 10
        var b = 10 
        var c = a-b

        assert.equal(c,0);


    });

    it('Multiplication of two numbers', function () {
        var a = 10
        var b = 10 
        var c = a*b

        assert.equal(c,100);


    });

    it('Division of two numbers', function () {
        var a = 10
        var b = 10 
        var c = a/b

        assert.equal(c,1);


    });

    it('Tis is a test for pending test feature')  //pending test
});
