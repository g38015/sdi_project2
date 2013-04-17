// alert("JavaScript works!");

// Peter Hitchcock
// SDI 1304
// April 16, 2013
// Project 2

// Start

// Initial Variables Sting, Number, Array
var skiDecision = "we need to check how many inches and see if the roads are clear to decide where we are going to ski today",
		snowInches = 12,
		didItSnow = true,
		arr = [];

// Procedure Function
var didItSnow = function(checkForSnow){
		
		if (checkForSnow === true)
		{
			console.log("Awesome! It Snowed, " + skiDecision);
		}
		else
		{
			console.log("Since it did not snow let's get ready to head to Sierra.");
		}
};

// Boolean Function
var snowedRoadsClear = function(snowed, roadClear){
		if (snowed && roadClear === true)
		{
			console.log("The roads are clear let's head to Kirkwood.");
	  }
	  else
	  {
	  	console.log("Let's go to Sierra for the day.");
	  }
	  return "Decisions decisions what equipment should I take?"
};

// Number Function
var howMuchSnow = function(snowToday){
		//var totalSnow = snowToday;
		for (var i = 1; i <= snowToday; i = i + 1) {
			if (i < snowToday) {
				console.log("This is crazy! We now have " + i + " inches of new snow to ski on.")
			} else {
				console.log("Cool! Time to pack up the car.")
			}
		};
		return snowToday;
};

// String Function
var getReady = function(grabBoots, grabSkis){

		var skiEquipment = "I am taking my " + grabBoots + " boots and my " + grabSkis + " skis for this adventure";
		return skiEquipment;		
};

// Array Function
//var arrayFunction = function(num, ar) {
//		var arr = [];
//		console.log("here is the number " + num + " here is the array " + ar);
//};

// Main 
didItSnow(true); //procedure WORKING
var newSnow = howMuchSnow(snowInches); //number
console.log("With " + newSnow + " inches of new snow,") //number RETURN VALUE
var areWeReady = snowedRoadsClear(true, true) //boolean WORKING
console.log(areWeReady) //boolean RETURN VALUE
var readyToSki = getReady("k2", "powder") //string WORKING
console.log(readyToSki) //string RETURN VALUE
//arrayFunction(10, [1,2,3,4])