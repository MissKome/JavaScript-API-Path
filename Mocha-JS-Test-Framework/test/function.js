/*
Test suite: Mathematical operations
Test cases: 
1. Addition
2. Subtraction
3. Multiplication
4. Division
*/

var assert = require('assert');

describe('Mathematical operations', function () {
    it('Addition of two numbers', function () {
        var a = 10
        var b = 10 
        var c = 10
        var d = a+b+c

        assert.equal(d,30);

    });

    it('Subtraction of two numbers', function () {
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
});
