// Array methods
//  map,filter,reduce,foreach,sort,spice,slice etc	

const since = [2, 5, 2003, 2004, 2005];

// MAP function
const mapData = since.map(element => {
	return element
});
console.log("Mappped data return is ", mapData);

// FILTER function
const filterData = since.filter(element => {
	return element > 3
});
console.log("filter data is ", filterData);

// REDUCE function
const totalData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const reduceData = totalData.reduce((accumulator, currentValue) => {
	return accumulator + currentValue
},100)

console.log("reduce data is ",reduceData);

let myCar = ['bmw', 'ferrari', 'mercedes', 'lamborgini']

// console.log("mycar object is",myCar);
// console.log("object length is",Object.keys(myCar).length);

// FOR-EACH loop
myCar.forEach(element => {
	console.log("foreach element is",element);
});
