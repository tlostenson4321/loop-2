var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];

// for ( var i = 0; i < animals.length -1; i++){
// 	console.log(animals[i])
// }

// for (var i = 0; i < animals.length; i+=2) {
// 	console.log(animals[i])
// }

// for ( var i = animals.length; i >= 0; i--) {
// 	console.log(animals[i])
// }
//  
for ( var i = 0; i < animals.length; i++) {
	if (animals[i] >= 3 && animals[i] <=1) {
		console.log(animals[i * 2])
	}
	
	else {
		console.log(animals[i])
	}
}

// need to get this to repeat spots 1, 2, and 3 for the array. 