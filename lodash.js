//lodash
const _ = require('lodash');
//Creates an array of elements split into groups the length of size. If collection can't be split evenly, the final chunk will be the remaining elements.
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

//Creates an array of unique array values not included in the other provided arrays using SameValueZero for equality comparisons.
_.difference([1, 2, 3], [4, 2]);
// => [1, 3]

let users = [
	{ 'user': 'barney', 'active': false },
	{ 'user': 'fred', 'active': false },
	{ 'user': 'pebbles', 'active': true }
];

_.findIndex(users, function (chr) {
	return chr.user == 'barney';
});

// using the `_.property` callback shorthand
_.findIndex(users, 'active');
// => 2

_([1, 2, 3]).toString();
// => '1,2,3'

_([1, 2, 3]).value();
// => [1, 2, 3]

let users = [
	{ 'user': 'barney', 'age': 36, 'active': true },
	{ 'user': 'fred', 'age': 40, 'active': false }
];

// using the `_.matches` callback shorthand
_.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
// => ['barney']

let users = [
	{ 'user': 'barney' },
	{ 'user': 'fred' }
];

// using the `_.property` callback shorthand
_.map(users, 'user');
// => ['barney', 'fred']


//max betweeen two or more using maxBy
let object = [
	{ 'n': 1 }, { 'n': 2 }
];

console.log(_.maxBy(object, 'n'));

