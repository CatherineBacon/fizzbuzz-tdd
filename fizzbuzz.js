

var fizzbuzz = function(n) {
    if(n%15 == 0) return 'fizzbuzz';
    if(n%3 == 0) return 'fizz';
    return n;
};

module.exports = fizzbuzz;
