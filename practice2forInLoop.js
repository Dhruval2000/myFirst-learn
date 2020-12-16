
// for..in loop is use with object only
var nestedData = {
	innerData: {
		order: ["first", "second", "third"],
		snacks: ["chips", "fruit", "crackers"],
		numberData: {
			primeNumbers: [1, 3, 5, 7, 9],
			fibonnaci: [1, 1, 2, 3, 5, 8, 13]
		},
		addSnack: function (snack) {
			this.snacks.push(snack);
			return this;
		}
	}
}

for (const key in nestedData) {
	if (nestedData.innerData.hasOwnProperty("snacks")) {
		console.log("innerdata is :::", nestedData.innerData.snacks);
	}
	else {
		console.log("no data key");
	}
}