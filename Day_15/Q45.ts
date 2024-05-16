//  Cars: Create a function to store information about the vehicle in an object. A manufacturer and model name should always be provided for the function. An arbitrary number of keyword arguments should therefore be accepted. The function needs to be called with the information requested, as well as two additional pairs of name=value: color or optional features. To ensure that all information is correctly stored, print the object that has been returned.

function Car(...other :string[]){
	let obj = {
		manufacturer: "Honda",
		modern: "Civic",
		other: {
			color: 'Red',
			features: "Sunroof",
		}
	};
	return obj;
}

console.log(Car());
