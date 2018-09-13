'use strict';

var age = 32;

var fruits = ['apple', 'orange'];

var basket = fruits.map(function (fruit) {
    return fruit + 's';
});

var a = ['a', 'b', 'c'];
var b = [].concat(a, ['foo']);
