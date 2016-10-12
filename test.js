var fizzbuzz = require('./fizzbuzz.js');

var assert = require('assert');

it('should exist', function() {
    assert(fizzbuzz);
    assert.equal(typeof fizzbuzz, 'function');
});

it('should normally return the input', function() {
    assert.equal(fizzbuzz(1), 1);
    assert.equal(fizzbuzz(2), 2);
});
