var fizzbuzz = require('./fizzbuzz.js');

var assert = require('assert');

it('should exist', function() {
    assert(fizzbuzz);
    assert.equal(typeof fizzbuzz, 'function');
});

it('should check if input is a number', function() {
    assert.throws(
        function() {
            fizzbuzz('test')
        },
        'That is not a number!'
    );
});

it('should normally return the input', function() {
    assert.equal(fizzbuzz(1), 1);
    assert.equal(fizzbuzz(2), 2);
});

it('should return fizzbuzz if n is divisible by 3 and 5', function() {
    assert.equal(fizzbuzz(15), 'fizzbuzz');
    assert.equal(fizzbuzz(30), 'fizzbuzz');
});

it('should return fizz if input is divisible by 3', function() {
    assert.equal(fizzbuzz(3), 'fizz');
    assert.equal(fizzbuzz(6), 'fizz');
});

it('should return buzz if input is divisible by 5', function() {
    assert.equal(fizzbuzz(5), 'buzz');
    assert.equal(fizzbuzz(10), 'buzz');
});
