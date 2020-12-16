const data = {
	get location(){
		return this._location
	},
	set location(value){
		this._location = value.toUpperCase();
	}
}
data.location = "hello learning"
console.log(data.location);
 