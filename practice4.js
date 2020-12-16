const _ = require('lodash');
const myObj = {
	car:
	{
		name: "audi",
		color: "black",
		number: 1111
	},
	bike: {
		name: "honda",
		color: "red",
		number: 2222
	},
	helicopter: {
		name: "black hawk",
		color: "black",
		number: 3333
	},
	cycle: {
		name: "honda",
		color: "blue",
		number: 4444
	},
	plane: {
		name: "spiceJet",
		color: "red",
		number: 5555
	}
}
// console.log("object is ", myObj);
// console.log("object is ", myObj.helicopter);
const newGroup = _.groupBy(myObj, 'color');
console.log("Group by color is::::",newGroup);