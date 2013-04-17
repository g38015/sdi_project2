// alert("JavaScript works!");

// Peter Hitchcock
// SDI 1304
// April 17, 2013
// Project 2

// Start

// Initial Variables Sting, Number, Array
var skiDecision = "we need to check how many inches and see if the roads are clear to decide where we are going to ski today",
		snowInches = 10,
		slopes = ["The Wall", " Sentinal Bowl", " and Cornice"];

// Procedure Function
var didItSnow = function(checkForSnow) {
		
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
var snowedRoadsClear = function(snowed, roadClear) {
		if (snowed && roadClear === true)
		{
			console.log("the roads are clear let's head to Kirkwood.");
	  }
	  else
	  {
	  	console.log("Let's go to Sierra for the day.");
	  }
	  return "Decisions decisions what equipment should I take?"
};

// Number Function
var howMuchSnow = function(snowToday) {
		for (var inches = 1; inches <= snowToday; inches = inches + 1) {
			if (inches < snowToday) {
				console.log("This is crazy! We now have " + inches + " inches of new snow to ski on.")
			} else {
				console.log("Cool! Time to pack up the car.")
			}
		}
		return snowToday;
};

// String Function
var getReady = function(grabBoots, grabSkis) {
		var skiEquipment = "Decided I am taking my " + grabBoots + " boots and my " + grabSkis + " skis for this adventure";
		return skiEquipment;		
};

// Array Function
var skiRuns = function(num, ar) {
		var runs = num;
		while (runs > ar.length ) {
			console.log("We have " + runs + " runs left");
			runs--; 
		};
		return "Didn't quite finish our day we missed " + ar.length + " runs.  They were " + slopes + ". Let's come back tomorrow:)";
};

// Main 
didItSnow(true); //procedure
var newSnow = howMuchSnow(snowInches); //number
console.log("With " + newSnow + " inches of new snow,");
var areWeReady = snowedRoadsClear(true, true); //boolean
console.log(areWeReady);
var readyToSki = getReady("k2", "powder"); //string
console.log(readyToSki);
var decideRuns = skiRuns(10, slopes); //array
console.log(decideRuns);