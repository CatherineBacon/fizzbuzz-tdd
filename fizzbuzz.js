

var fizzbuzz = function(n) {

    if(isNaN(n)) throw new Error('That is not a number!');
    
    if(n%15 == 0) return 'fizzbuzz';
    if(n%3 == 0) return 'fizz';
    if(n%5 == 0) return 'buzz';
    return n;
};

module.exports = fizzbuzz;
