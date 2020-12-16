// Object and accessing its property(attriibutes)

//Object methods: 
	/*
	Object.keys(myObjName)  //return property(keys) names
	Object.values(myObjName)//return property(keys) values
	myObjName.hasOwnProperty("attribute") //return boolean value true false
	Object.entries(myObjName)  //returns arrays of an given object
	Object.getOwnPropertyNames(myObjName) //return property names
	*/

//loop with object
/*
	for..in
*/

let myCar = {
	"name": "BMW",
	"model": "rx190",
	"year": "2020",
	"color": "black",
	"myBike": {
		"name": "hero",
		"model": "150",
		"year": "2015",
		"color": "grey",
		"rrr": "3333"
	}
}

const myNewObj = [];
for (keys in myCar) {
	 myNewObj.push(myCar[keys]);
}
console.log("my new object ",myNewObj);

let xxx = [
	{
		"rrr": "hello",
		"number": "01"
	},
	{
		"rrr": "hii",
		"number": "02"
	},
	{
		"rrr": "welcome",
		"number": "03"
	}
]

myCar.owner = "Abhishek";


if (myCar.hasOwnProperty("color")) {
			console.log("myCar.color is ",myCar.color);
} else {
	console.log("false");
}


for (const key in myCar) {
		console.log(`${key}: ${myCar[key]}`);

}

console.log("44444444", myCar.hasOwnProperty("color")); 
console.log("55555555",Object.keys(myCar.myBike));
console.log("66666666",Object.values(myCar)); 
console.log("77777777", Object.getOwnPropertyNames(myCar));
console.log("88888888", Object.entries(myCar));
console.log("99999",myCar.myBike); //return property names of second object 




